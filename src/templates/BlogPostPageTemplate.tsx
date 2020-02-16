import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'
import { MainLayout as Layout } from '../components/layout'
import { Seo, SiteInformation } from '../components/metadata'
import { TagList, TableOfContent } from '../components/blog'

interface BlogPostPageProps {
  pageContext: {
    slug: string
  }
  data: {
    site: SiteInformation
    markdownRemark: {
      timeToRead: number
      html: string
      frontmatter: {
        date: Date
        title: string
        description: string
        tags: string[]
        image: string
      }
      headings: {
        depth: number
        value: string
      }[]
    }
  }
}

const BlogPostPage = ({ pageContext, data }: BlogPostPageProps) => {
  const { site, markdownRemark } = data
  return (
    <Layout siteMetadata={site.siteMetadata}>
      <Seo
        title={markdownRemark.frontmatter.title}
        description={markdownRemark.frontmatter.description}
        site={site}
      />
      <Container fluid>
        <Row>
          <Col xl="9">
            <Breadcrumb>
              <Breadcrumb.Item href="/blog/">Blog</Breadcrumb.Item>
              <Breadcrumb.Item href={pageContext.slug} active>
                {markdownRemark.frontmatter.title}
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col className="d-none d-xl-flex" xl={{ span: 3, order: 12 }}>
            <TableOfContent headings={markdownRemark.headings} />
          </Col>
          <Col>
            <main>
              <mark>Eventually the blog image here...</mark>
              <h1 className="mb-0">{markdownRemark.frontmatter.title}</h1>
              <p className="text-muted">
                <em>
                  Updated on {markdownRemark.frontmatter.date} - {markdownRemark.timeToRead} min
                  read
                </em>
              </p>
              <TagList values={markdownRemark.frontmatter.tags} />
              <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
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
    markdownRemark(id: { eq: $id }) {
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
      headings {
        depth
        value
      }
      timeToRead
      html
    }
  }
`

export default BlogPostPage
