import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col, Nav as BootstrapNav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MainLayout as Layout } from '../components/layout'
import { Nav } from '../components/nav'
import { Seo } from '../components/metadata'
import { TableOfContent, PostCard } from '../components/blog'

import './BlogPostTemplate.scss'

// eg: https://github.com/arnaud-deprez/arnaud-deprez.github.io/edit/master/content/blog/web/why-gatsby-for-my-website/index.mdx
const editUrl = (githubRepoUrl = '', relativePath = '') =>
  `${githubRepoUrl}/edit/master/content/${relativePath}`

const renderLeftMenu = (data: GatsbyTypes.BlogPostPageQuery) => () => (
  <>
    <Nav className="flex-column" as="ul">
      <BootstrapNav.Link
        href={editUrl(data.site?.siteMetadata?.repository, data.mdx?.parent?.relativePath)}
      >
        <FontAwesomeIcon icon="edit" /> Edit on GitHub
      </BootstrapNav.Link>
    </Nav>
  </>
)

interface BlogPostPageProps {
  pageContext: {
    slug: string
  }
  data: GatsbyTypes.BlogPostPageQuery
}

const BlogPostPage = ({ pageContext, data }: BlogPostPageProps) => {
  const { slug } = pageContext
  const { mdx: post } = data

  const title = post?.frontmatter?.title
  const description = post?.frontmatter?.description || post.excerpt

  return (
    <Layout renderLeftMenu={renderLeftMenu(data)}>
      <Seo
        title={title}
        description={description}
        image={post?.frontmatter?.image?.childImageSharp?.fluid?.src}
      />
      <Container className="blog-post" fluid>
        <Row>
          <Col className="d-none d-xl-flex px-0" xl={{ span: 3, order: 12 }} as="aside">
            {post?.tableOfContents?.items && <TableOfContent items={post.tableOfContents?.items} />}
          </Col>
          <Col className="px-0">
            <PostCard {...{ ...data, slug }} as="main" />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostPage($id: String!) {
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
