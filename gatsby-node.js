/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { kebabCase } = require('lodash')
const { uniq } = require('ramda')
const { createFilePath } = require(`gatsby-source-filesystem`)
const BlogListPageTemplate = path.resolve('src/templates/BlogListPageTemplate.tsx')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark' || node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value: slug
    })
  }
}

const createBlogPaginatedPages = ({
  createPage,
  component,
  total,
  prefix = '',
  limit = 10,
  context = {}
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
        skip
      }
    })
  }
}

exports.createPages = ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  return graphql(`
    query GatsbyCreatePage {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              tags
              templateKey
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      reporter.panicOnBuild('Error while running GraphQL query.')
      return Promise.reject(result.errors)
    }

    const edges = result.data.allMdx.edges

    // Create single content pages:
    edges
      .filter(({ node }) => !!node.frontmatter.templateKey) // make sure we have templateKey for it
      .forEach(({ node }) => {
        const { id, fields, frontmatter } = node
        const slug = frontmatter.path || fields.slug
        createPage({
          path: slug,
          tags: frontmatter.tags,
          component: path.resolve(`src/templates/${String(frontmatter.templateKey)}.tsx`),
          // additional data can be passed via context
          context: {
            id,
            slug
          }
        })
      })

    // Create blog content list:
    createBlogPaginatedPages({
      total: edges.filter(e => e.node.fields.slug.startsWith('/blog/')).length,
      createPage,
      component: BlogListPageTemplate,
      limit: 10,
      prefix: 'blog'
    })

    //   // Create content lists by tag:
    //   const tags = uniq(
    //     edges.reduce((acc, { node }) => [...acc, ...(node.frontmatter.tags || [])], [])
    //   )

    //   tags.forEach(tag => {
    //     const slug = kebabCase(tag)

    //     createPaginatedPages({
    //       edges: edges.filter(({ node }) => (node.frontmatter.tags || []).includes(tag)),
    //       createPage,
    //       component: TagTemplate,
    //       limit: 10,
    //       prefix: `tags/${slug}`,
    //       context: {
    //         slug,
    //         tag
    //       }
    //     })
  })
}
