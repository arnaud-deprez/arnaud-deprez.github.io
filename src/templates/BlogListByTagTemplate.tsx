import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'react-bootstrap'
import { MainLayout as Layout } from '../components/layout'
import { Seo } from '../components/metadata'
import { Pager } from '../components/nav'
import Link from '../components/link/Link'
import { PostList, PostNode } from '../components/blog'
import { PaginatedPageContext } from '../types'

export interface BlogListPageProps {
  pageContext: PaginatedPageContext & { tag?: string }
  data: GatsbyTypes.BlogListByTagQuery
}

const BlogListByTagPage = ({ pageContext, data }: BlogListPageProps): JSX.Element => {
  const { tag, prefix, page, pageTotal: total } = pageContext
  const edges = data.allMdx.edges
  const nodes = edges?.map((e) => e.node)
  if (!nodes) {
    throw new Error('BlogListPage: cannot render a list post that is undefined')
  }
  return (
    <Layout>
      <Seo
        title={`Blog posts with tag ${tag} ${page > 1 ? 'at page ' + page : ''}`.trim()}
        description={`List of all blog posts with tag ${tag} at page ${page}`}
      />
      <main>
        <Container className="d-flex flex-column">
          <h1 className="mb-5">
            Blog posts with tag <Link href={`blog/tags/${tag}/`}>{tag}</Link>
          </h1>
          <PostList posts={nodes as PostNode[]} />
          <Pager {...{ prefix, page, total }} className="align-self-center" />
        </Container>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogListByTag($tag: String!, $skip: Int!, $limit: Int!) {
    allMdx(
      filter: {
        frontmatter: { draft: { ne: true }, tags: { in: [$tag] } }
        fields: { slug: { glob: "/blog/**" } }
      }
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
            date
            dateString: date(formatString: "MMMM Do YYYY")
            title
            description
            tags
            image {
              src {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                    layout: FULL_WIDTH
                    breakpoints: [325, 750, 1080, 1366, 1920]
                    placeholder: BLURRED
                  )
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

export default BlogListByTagPage
