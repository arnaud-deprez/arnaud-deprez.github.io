import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Container, Row, Col, Card, Nav as BootstrapNav } from 'react-bootstrap'
import { Link as ScrollSpyLink } from 'react-scroll'
import { FaConnectdevelop, FaRocket, FaCode, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { PhotoCard } from '../components/photocard/PhotoCard'
import { MainLayout as Layout } from '../components/layout'
import { Seo, SiteInformation } from '../components/metadata'
import { Nav, NavSocialIcons } from '../components/nav'

import './index.scss'

const renderLeftMenu = () => (
  <Nav className="flex-column align-items-center" as="ul">
    <BootstrapNav.Link
      activeClass="active"
      to="about"
      spy={true}
      smooth={true}
      duration={200}
      as={ScrollSpyLink}
    >
      About
    </BootstrapNav.Link>
    <BootstrapNav.Link
      activeClass="active"
      to="skills"
      spy={true}
      smooth={true}
      duration={200}
      as={ScrollSpyLink}
    >
      Skills
    </BootstrapNav.Link>
    <BootstrapNav.Link
      activeClass="active"
      to="interests"
      spy={true}
      smooth={true}
      duration={200}
      as={ScrollSpyLink}
    >
      Interests
    </BootstrapNav.Link>
  </Nav>
)

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
