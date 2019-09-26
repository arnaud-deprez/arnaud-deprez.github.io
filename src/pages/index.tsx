import React from 'react'
import { Link, graphql } from 'gatsby'
import { Container, Row, Col, Jumbotron, Nav } from 'react-bootstrap'
import { Layout } from '../components/layout'
import { LeftMenu } from '../components/nav'
import { SiteInformation } from '../components/metadata'

const MainContent = () => (
  <>
    <Jumbotron id="about">
      <h2>Hi people</h2>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>
        <Link to="/another-page/">Go to another page</Link>
      </p>
      <p>
        <Link to="/all/">See content generated from Markdown files</Link>
      </p>
    </Jumbotron>
    <Jumbotron id="skills">
      <h2>Hi people</h2>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>
        <Link to="/another-page/">Go to another page</Link>
      </p>
      <p>
        <Link to="/all/">See content generated from Markdown files</Link>
      </p>
    </Jumbotron>
    <Jumbotron id="interests">
      <h2>Hi people</h2>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>
        <Link to="/another-page/">Go to another page</Link>
      </p>
      <p>
        <Link to="/all/">See content generated from Markdown files</Link>
      </p>
    </Jumbotron>
  </>
)

const IndexPage = (site: SiteInformation) => (
  <Container fluid>
    <Row>
      <Col lg={2} as="aside">
        <LeftMenu metadata={site.siteMetadata}>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#interests">Interests</Nav.Link>
        </LeftMenu>
      </Col>
      <Col className="min-h-75vh" as="main">
        <MainContent />
      </Col>
    </Row>
  </Container>
)

interface IndexPageProps {
  data: {
    site: SiteInformation
  }
}

const LayoutIndexPage = ({ data }: IndexPageProps) => (
  <Layout {...data}>
    <IndexPage {...data.site} />
  </Layout>
)

export const pageQuery = graphql`
  query IndexPageQuery {
    site {
      ...SiteInformation
    }
  }
`

export default LayoutIndexPage
