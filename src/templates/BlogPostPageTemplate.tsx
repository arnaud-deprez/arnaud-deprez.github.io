import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'
import { MainLayout as Layout } from '../components/layout'
import { Seo, SiteInformation } from '../components/metadata'
import { TagList, TableOfContent, TableOfContentProps } from '../components/blog'

interface Title {
  url: string
  title: string
  items?: Title[]
}
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
        image: string
      }
      tableOfContents: TableOfContentProps
    }
  }
}

const BlogPostPage = ({ pageContext, data }: BlogPostPageProps) => {
  const { site, mdx } = data
  return (
    <Layout siteMetadata={site.siteMetadata}>
      <Seo title={mdx.frontmatter.title} description={mdx.frontmatter.description} site={site} />
      <Container fluid>
        <Row>
          <Col xl="9">
            <Breadcrumb>
              <Breadcrumb.Item href="/blog/">Blog</Breadcrumb.Item>
              <Breadcrumb.Item href={pageContext.slug} active>
                {mdx.frontmatter.title}
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col className="d-none d-xl-flex" xl={{ span: 3, order: 12 }}>
            <TableOfContent items={mdx.tableOfContents.items} />
          </Col>
          <Col>
            <main>
              <mark>Eventually the blog image here...</mark>
              <h1 className="mb-0">{mdx.frontmatter.title}</h1>
              <p className="text-muted">
                <em>
                  Updated on {mdx.frontmatter.date} - {mdx.timeToRead} min read
                </em>
              </p>
              <TagList values={mdx.frontmatter.tags} />
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
            fluid(maxWidth: 120, quality: 100) {
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
