import React from 'react'
import { graphql } from 'gatsby'
import { MainLayout as Layout } from '../components/layout'
import { Seo } from '../components/metadata'

interface NotFoundPageProps {
  data: GatsbyTypes.NotFoundPageQuery
}

const NotFoundPage = ({ data }: NotFoundPageProps) => (
  <Layout siteMetadata={data.site?.siteMetadata}>
    <Seo title="Not Found" description="Oups, you may find an unexpected path" {...data} />
    <div className="main-content">
      <h1>Nothing Here</h1>
      <p>Check that you followed the correct address...</p>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query NotFoundPage {
    site {
      ...SiteInformation
    }
  }
`

export default NotFoundPage
