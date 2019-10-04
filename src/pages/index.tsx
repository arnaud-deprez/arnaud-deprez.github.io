import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import { Nav } from 'react-bootstrap'
import { MainLayout as Layout } from '../components/layout'
import { Seo, SiteInformation } from '../components/metadata'

import './index.scss'

// TODO: review this API with React.Fragment usage.
const renderLeftMenu = () => [
  <Nav.Link key="about" href="#about">
    About
  </Nav.Link>,
  <Nav.Link key="skills" href="#skills">
    Skills
  </Nav.Link>,
  <Nav.Link key="interests" href="#interests">
    Interests
  </Nav.Link>
]

interface IndexPageProps {
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

const IndexPage = ({ data }: IndexPageProps) => (
  <Layout author={data.site.siteMetadata.author} renderLeftMenu={renderLeftMenu}>
    <Seo site={data.site} />
    <MDXRenderer author={data.site.siteMetadata.author}>{data.mdx.body}</MDXRenderer>
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

export default IndexPage
