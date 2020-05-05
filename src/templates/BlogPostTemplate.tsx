import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Container, Row, Col, Nav as BootstrapNav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MainLayout as Layout } from '../components/layout'
import { Nav } from '../components/nav'
import { Seo } from '../components/metadata'
import { Tags, TableOfContent, PostTimeInfo } from '../components/blog'

import './BlogPostTemplate.scss'

// eg: https://github.com/arnaud-deprez/arnaud-deprez.github.io/edit/master/content/blog/web/why-gatsby-for-my-website/index.mdx
const editUrl = (githubRepoUrl = '', relativePath = '') =>
  `${githubRepoUrl}/edit/master/content/${relativePath}`

const renderLeftMenu = (data: GatsbyTypes.BlogPostPageQuery) => () => (
  <Nav className="flex-column align-items-center" as="ul">
    <BootstrapNav.Link
      href={editUrl(data.site?.siteMetadata?.repository, data.mdx?.parent?.relativePath)}
    >
      <FontAwesomeIcon icon="edit" /> Edit on GitHub
    </BootstrapNav.Link>
  </Nav>
)

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
  if (!post.frontmatter?.date) {
    throw new Error('BlogPostPage: post.frontmatter.date is required')
  }
  return (
    <Layout siteMetadata={site?.siteMetadata} renderLeftMenu={renderLeftMenu(data)}>
      <Seo
        title={post.frontmatter?.title}
        description={post.frontmatter?.description || post.excerpt}
        site={site}
        image={post.frontmatter.image?.childImageSharp?.fluid?.src}
      />
      <Container className="blog-post" fluid>
        <Row>
          <Col className="d-none d-xl-flex px-0" xl={{ span: 3, order: 12 }} as="aside">
            {post?.tableOfContents?.items && <TableOfContent items={post.tableOfContents?.items} />}
          </Col>
          <Col className="px-0">
            <main>
              {post.frontmatter?.image && (
                <Img
                  fluid={post.frontmatter.image?.childImageSharp?.fluid}
                  className="blog-title-image"
                  imgStyle={{ objectFit: 'contain' }}
                  alt={`${post.frontmatter.title}`}
                />
              )}
              <h1>{post.frontmatter?.title}</h1>
              <PostTimeInfo
                date={post.frontmatter.date}
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
            fluid(maxHeight: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      tableOfContents
      timeToRead
      body
      excerpt
      parent {
        ... on File {
          relativePath
        }
      }
    }
  }
`

export default BlogPostPage
