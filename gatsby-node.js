/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { kebabCase } = require('lodash')
const { uniq } = require('ramda')
const { createFilePath } = require(`gatsby-source-filesystem`)

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

const defaultBuildPath = (page, prefix) => (page > 1 ? `${prefix}/${page}` : `/${prefix}`)

const createPaginatedPages = ({
  edges,
  createPage,
  component,
  limit = 10,
  prefix = '',
  buildPath = defaultBuildPath,
  context = {}
}) => {
  edges
    .map((edge, index) => index % limit === 0 && edges.slice(index, index + limit))
    .filter(group => group)
    .forEach((group, index, groups) =>
      createPage({
        path: buildPath(index + 1, prefix),
        component,
        context: {
          ...context,
          group,
          prefix,
          page: index + 1,
          pageTotal: groups.length,
          itemTotal: edges.length
        }
      })
    )
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    query GatsbyCreatePage {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
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
      return Promise.reject(result.errors)
    }

    const edges = result.data.allMarkdownRemark.edges

    // Create single content pages:
    edges
      .filter(({ node }) => !!node.frontmatter.templateKey) // make sure we have templateKey for it
      .forEach(({ node }) => {
        const { id, fields, frontmatter } = node
        createPage({
          path: frontmatter.path || fields.slug,
          tags: frontmatter.tags,
          component: path.resolve(`src/templates/${String(frontmatter.templateKey)}.tsx`),
          // additional data can be passed via context
          context: {
            id
          }
        })
      })

    // Create full content list:
    //   createPaginatedPages({
    //     edges,
    //     createPage,
    //     component: IndexTemplate,
    //     limit: 10,
    //     prefix: 'all'
    //   })

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
