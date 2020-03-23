import React from 'react'
import { graphql } from 'gatsby'
import { MainLayout as Layout } from '../components/layout'
import { Seo, SiteInformation } from '../components/metadata'
import { PostSummaryList, PostNode } from '../components/blog'

interface ArchivePageContext {
  readonly total: number
  readonly page: number
  readonly pageTotal: number
  readonly prefix: string
}

export interface BlogListPageProps {
  pageContext: ArchivePageContext
  data: {
    site: SiteInformation
    allMdx: {
      edges: {
        node: PostNode
      }[]
    }
  }
}

const BlogListPage = ({ pageContext, data }: BlogListPageProps) => {
  const { page } = pageContext
  const site = data.site
  const siteMetadata = site.siteMetadata
  const edges = data.allMdx.edges
  return (
    <Layout {...{ siteMetadata }}>
      <Seo
        title={`Blog posts ${page > 1 ? page : ''}`.trim()}
        description="List of all blog posts"
        site={site}
      />
      <main>
        <h1>Blog posts</h1>
        <PostSummaryList posts={edges.map(e => e.node)} />
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    site {
      ...SiteInformation
    }
    allMdx(
      filter: { frontmatter: { draft: { ne: true } }, fields: { slug: { glob: "/blog/**" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
            description
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`

export default BlogListPage
