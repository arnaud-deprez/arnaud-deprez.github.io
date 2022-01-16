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

const renderLeftMenu = (data: GatsbyTypes.BlogPostPageQuery) => {
  const LeftMenu = () => (
    <Nav className="flex-column" as="ul">
      <BootstrapNav.Link
        href={editUrl(data.site?.siteMetadata?.repository, data.mdx?.parent?.relativePath)}
      >
        <FontAwesomeIcon icon="edit" /> Edit on GitHub
      </BootstrapNav.Link>
    </Nav>
  )
  return LeftMenu
}

interface BlogPostPageProps {
  pageContext: {
    slug: string
  }
  data: GatsbyTypes.BlogPostPageQuery
}

const BlogPostPage = ({ pageContext, data }: BlogPostPageProps): JSX.Element => {
  const { slug } = pageContext
  const { mdx: post } = data

  const title = post?.frontmatter?.title
  const description = post?.frontmatter?.description || post?.excerpt

  return (
    <Layout renderLeftMenu={renderLeftMenu(data)}>
      <Seo
        isBlogPost
        title={title}
        description={description}
        image={post?.frontmatter?.image?.src?.childImageSharp?.gatsbyImageData?.src}
        datePublished={post?.frontmatter?.date}
      />
      <Container className="blog-post" fluid>
        <Row>
          <Col className="d-none d-xl-flex" xl={{ span: 3, order: 1 }} as="aside">
            {post?.tableOfContents?.items && <TableOfContent items={post.tableOfContents?.items} />}
          </Col>
          <Col>
            <PostCard {...{ ...data, slug }} as="main" />
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
          caption
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
