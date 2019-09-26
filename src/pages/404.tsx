import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/layout'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import { LeftMenu } from '../components/nav'
import { SiteInformation } from '../components/metadata'

const MainContent = () => (
  <Jumbotron>
    <h2>Nothing Here</h2>
    <p>Check that you followed the correct address.</p>
  </Jumbotron>
)

interface NotFoundPageProps {
  data: {
    site: SiteInformation
  }
}

const NotFoundPage = ({ data }: NotFoundPageProps) => (
  <Layout title="Not Found" {...data}>
    <Container fluid>
      <Row>
        <Col lg={2} as="aside">
          <LeftMenu metadata={data.site.siteMetadata} />
        </Col>
        <Col className="min-h-75vh" as="main">
          <MainContent />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export const pageQuery = graphql`
  query NotFoundPageQuery {
    site {
      ...SiteInformation
    }
  }
`

export default NotFoundPage
