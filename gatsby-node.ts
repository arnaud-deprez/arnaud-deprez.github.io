/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 *
 * Because we used ts-node in gatsby-config.js, this file will automatically be
 * imported by Gatsby instead of gatsby-node.js.
 */

import * as path from 'path'
import { kebabCase } from 'lodash'
import { createFilePath } from 'gatsby-source-filesystem'
// Use the type definitions that are included with Gatsby.
import { GatsbyNode } from 'gatsby'

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, getNode, actions }) => {
  const { createNodeField, createRedirect } = actions
  if (node.internal.type === 'MarkdownRemark' || node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value: slug,
    })
  }

  // For netlify
  createRedirect({
    fromPath: '/*', // your matchPath here
    toPath: '/404', // the path to your 404 page here
    statusCode: 404,
  })
}

const groupCountBy = (field, edges) => {
  const groupCounts = edges.reduce((acc, { node }) => {
    const groups = node.frontmatter[field] || []
    groups.forEach((group) => {
      acc[group] = (acc[group] || 0) + 1
    })
    return acc
  }, {})

  return Object.entries<number>(groupCounts)
}

const createPaginatedPages = ({
  createPage,
  component,
  total,
  prefix = '',
  limit = 10,
  context = {},
}) => {
  const pageTotal = Math.ceil(total / limit)

  for (let page = 1; page <= pageTotal; page++) {
    const path = page > 1 ? `${prefix}/${page}` : `${prefix}`
    const skip = (page - 1) * limit

    createPage({
      path,
      component,
      context: {
        ...context,
        total,
        limit,
        page,
        pageTotal,
        prefix,
        skip,
      },
    })
  }
}

const createBlogPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const { data, errors } = await graphql(`
    query GatsbyCreatePage {
      allMdx(
        filter: { frontmatter: { draft: { ne: true } }, fields: { slug: { glob: "/blog/**" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            id
            frontmatter {
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (errors) {
    reporter.panicOnBuild('Error fetching data', errors)
    return
  }

  const blogPosts = data.allMdx.edges

  // Create single content pages:
  blogPosts.forEach(({ node }) => {
    const { id, fields, frontmatter } = node
    const slug = frontmatter.path || fields.slug
    createPage({
      path: slug,
      tags: frontmatter.tags,
      component: path.resolve(`src/templates/BlogPostTemplate.tsx`),
      // additional data can be passed via context
      context: {
        id,
        slug,
      },
    })
  })

  // Create blog content list:
  const totalBlogPosts = blogPosts.length
  reporter.info(`Blog posts (${totalBlogPosts})`)
  createPaginatedPages({
    total: totalBlogPosts,
    createPage,
    component: path.resolve('src/templates/BlogListTemplate.tsx'),
    limit: 10,
    prefix: '/blog/',
  })

  groupCountBy('tags', blogPosts).forEach(([tag, total]) => {
    createPaginatedPages({
      total,
      createPage,
      component: path.resolve('src/templates/BlogListByTagTemplate.tsx'),
      prefix: `/blog/tags/${kebabCase(tag)}/`,
      context: { tag },
    })
    reporter.info(`Tag: ${tag} (${Math.ceil(total / 10)})`)
  })
}

export const createPages: GatsbyNode['createPages'] = async (gatsby) => {
  await createBlogPages(gatsby)
}
