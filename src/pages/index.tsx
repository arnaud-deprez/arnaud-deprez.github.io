import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { Layout } from '../components/layout'
import { LeftMenu } from '../components/nav'
import { Seo, SiteInformation } from '../components/metadata'

import './index.scss'

interface IndexPageProps {
  site: SiteInformation
  children?: React.ReactNode | React.ReactNode[]
}

// TODO: fix any type
const IndexPage = ({ site, children }: IndexPageProps) => (
  <Container fluid>
    <Row>
      <Col lg={2} as="aside">
        <LeftMenu metadata={site.siteMetadata}>
          <Nav.Link key="about" href="#about">
            About
          </Nav.Link>
          <Nav.Link key="skills" href="#skills">
            Skills
          </Nav.Link>
          <Nav.Link key="interests" href="#interests">
            Interests
          </Nav.Link>
        </LeftMenu>
      </Col>
      <Col className="min-h-75vh" as="main">
        <MDXRenderer author={site.siteMetadata.author}>{children}</MDXRenderer>
      </Col>
    </Row>
  </Container>
)

interface LayoutIndexProps {
  data: {
    site: SiteInformation
    mdx: {
      body: string
      tableOfContents: [
        {
          url: string
          title: string
        }
      ]
    }
  }
}

const LayoutIndexPage = ({ data }: LayoutIndexProps) => (
  <Layout headerTitle={data.site.siteMetadata.title}>
    <Seo site={data.site} />
    <IndexPage site={data.site}>{data.mdx.body}</IndexPage>
  </Layout>
)

export const pageQuery = graphql`
  query IndexPageQuery {
    site {
      ...SiteInformation
    }
    mdx(fields: { slug: { eq: "/" } }) {
      body
      tableOfContents(maxDepth: 2)
    }
  }
`

export default LayoutIndexPage
