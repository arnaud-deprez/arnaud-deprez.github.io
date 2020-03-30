import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'
import { MainLayout as Layout } from '../components/layout'
import { Seo, SiteInformation } from '../components/metadata'
import { TagList, TableOfContent, TableOfContentProps } from '../components/blog'

interface BlogPostPageProps {
  pageContext: {
    slug: string
  }
  data: {
    site: SiteInformation
    mdx: {
      timeToRead: number
      body: string
      frontmatter: {
        date: Date
        title: string
        description: string
        tags: string[]
        image: any
      }
      tableOfContents: TableOfContentProps
    }
  }
}

const BlogPostPage = ({ pageContext, data }: BlogPostPageProps) => {
  const { site, mdx: post } = data
  return (
    <Layout siteMetadata={site.siteMetadata}>
      <Seo title={post.frontmatter.title} description={post.frontmatter.description} site={site} />
      <Container fluid>
        <Row>
          <Col xl="9">
            <Breadcrumb>
              <Breadcrumb.Item href="/blog/">Blog</Breadcrumb.Item>
              <Breadcrumb.Item href={pageContext.slug} active>
                {post.frontmatter.title}
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col className="d-none d-xl-flex" xl={{ span: 3, order: 12 }} as="aside">
            <TableOfContent items={post.tableOfContents.items} />
          </Col>
          <Col>
            <main>
              {post.frontmatter.image && (
                <Img
                  fluid={post.frontmatter.image.childImageSharp.fluid}
                  style={{ height: '400px' }}
                  alt={`${post.frontmatter.title} image`}
                />
              )}
              <h1 className="mb-0">{post.frontmatter.title}</h1>
              <p className="text-muted">
                <em>
                  Updated on {post.frontmatter.date} - {post.timeToRead} min read
                </em>
              </p>
              <TagList values={post.frontmatter.tags} />
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </main>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
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
            fluid(maxHeight: 150, maxWidth: 800, quality: 100) {
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
