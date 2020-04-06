import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'
import { MainLayout as Layout } from '../components/layout'
import { Seo } from '../components/metadata'
import { TagList, TableOfContent } from '../components/blog'

interface BlogPostPageProps {
  pageContext: {
    slug: string
  }
  data: GatsbyTypes.BlogPostPageQuery
}

const BlogPostPage = ({ pageContext, data }: BlogPostPageProps) => {
  const { site, mdx: post } = data
  if (!post) {
    throw new Error('BlogPostPage: cannot render an undefined post')
  }
  return (
    <Layout siteMetadata={site?.siteMetadata}>
      <Seo
        title={post.frontmatter?.title}
        description={post.frontmatter?.description}
        site={site}
      />
      <Container fluid>
        <Row>
          <Col xl="9">
            {post.frontmatter?.title && (
              <Breadcrumb>
                <Breadcrumb.Item href="/blog/">Blog</Breadcrumb.Item>
                <Breadcrumb.Item href={pageContext.slug} active>
                  {post.frontmatter.title}
                </Breadcrumb.Item>
              </Breadcrumb>
            )}
          </Col>
        </Row>
        <Row>
          <Col className="d-none d-xl-flex" xl={{ span: 3, order: 12 }} as="aside">
            {post?.tableOfContents?.items && <TableOfContent items={post.tableOfContents.items} />}
          </Col>
          <Col>
            <main>
              {post.frontmatter?.image && (
                <Img
                  fluid={post.frontmatter.image?.childImageSharp?.fluid}
                  style={{ height: '400px' }}
                  alt={`${post.frontmatter.title} image`}
                />
              )}
              <h1 className="mb-0">{post.frontmatter?.title}</h1>
              <p className="text-muted">
                <em>
                  Updated on {post.frontmatter?.date} - {post.timeToRead} min read
                </em>
              </p>
              {post.frontmatter?.tags && <TagList values={post.frontmatter.tags as string[]} />}
              {post.body && <MDXRenderer>{post.body}</MDXRenderer>}
            </main>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostPage($id: String!) {
    site {
      ...SiteInformation
    }
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM Do YYYY")
        title
        description
        tags
        image {
          childImageSharp {
            fluid(maxHeight: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      tableOfContents
      timeToRead
      body
    }
  }
`

export default BlogPostPage
