import React from 'react'
import { graphql } from 'gatsby'
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
    <div className="main-content">
      <h1>Nothing Here</h1>
      <p>Check that you followed the correct address...</p>
    </div>
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
