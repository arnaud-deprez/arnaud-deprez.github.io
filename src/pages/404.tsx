import React from 'react'
import { graphql } from 'gatsby'
import { Jumbotron } from 'react-bootstrap'
import { MainLayout as Layout } from '../components/layout'
import { Seo, SiteInformation } from '../components/metadata'

interface NotFoundPageProps {
  data: {
    site: SiteInformation
  }
}

const NotFoundPage = ({ data }: NotFoundPageProps) => (
  <Layout author={data.site.siteMetadata.author}>
    <Seo title="Not Found" description="Oups, you may find an unexpected path" {...data} />
    <Jumbotron>
      <h2>Nothing Here</h2>
      <p>Check that you followed the correct address.</p>
    </Jumbotron>
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
