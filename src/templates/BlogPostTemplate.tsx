import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Container, Row, Col } from 'react-bootstrap'
import { MainLayout as Layout } from '../components/layout'
import { Seo } from '../components/metadata'
import { Tags, TableOfContent, PostTimeInfo } from '../components/blog'

import './BlogPostTemplate.scss'

interface BlogPostPageProps {
  pageContext: {
    slug: string
  }
  data: GatsbyTypes.BlogPostPageQuery
}

const BlogPostPage = ({ data }: BlogPostPageProps) => {
  const { site, mdx: post } = data
  if (!post) {
    throw new Error('BlogPostPage: post is required')
  }
  if (!post.timeToRead) {
    throw new Error('BlogPostPage: post.timeToRead is required')
  }
  return (
    <Layout siteMetadata={site?.siteMetadata}>
      <Seo
        title={post.frontmatter?.title}
        description={post.frontmatter?.description || post.excerpt}
        site={site}
      />
      <Container className="blog-post" fluid>
        {/* <Row>
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
        </Row> */}
        <Row>
          <Col className="d-none d-xl-flex px-0" xl={{ span: 3, order: 12 }} as="aside">
            {post?.tableOfContents?.items && <TableOfContent items={post.tableOfContents.items} />}
          </Col>
          <Col className="px-0">
            <main>
              {post.frontmatter?.image && (
                <Img
                  fluid={post.frontmatter.image?.childImageSharp?.fluid}
                  className="blog-title-image"
                  alt={`${post.frontmatter.title} image`}
                />
              )}
              <h1>{post.frontmatter?.title}</h1>
              <PostTimeInfo
                date={post.frontmatter?.date}
                dateString={post.frontmatter?.dateString}
                timeToRead={post.timeToRead}
              />
              {post.frontmatter?.tags && <Tags values={post.frontmatter.tags as string[]} />}
              {post.body && (
                <section className="text-justify">
                  <MDXRenderer>{post.body}</MDXRenderer>
                </section>
              )}
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
        date
        dateString: date(formatString: "MMMM Do YYYY")
        title
        description
        tags
        image {
          childImageSharp {
            fluid(maxHeight: 400, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      tableOfContents
      timeToRead
      body
      excerpt
    }
  }
`

export default BlogPostPage
