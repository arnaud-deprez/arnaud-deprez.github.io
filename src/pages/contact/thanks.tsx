import React from 'react'
import { graphql } from 'gatsby'
import { Jumbotron } from 'react-bootstrap'
import { MainLayout as Layout } from '../../components/layout'
import { Seo, SiteInformation } from '../../components/metadata'

interface ContactThanksPageProps {
  data: {
    site: SiteInformation
  }
}

const ContactThanksPage = ({ data }: ContactThanksPageProps) => (
  <Layout author={data.site.siteMetadata.author}>
    <Seo title="Contact - Thanks" {...data} />
    <Jumbotron>
      <h2>Nothing Here</h2>
      <p>Check that you followed the correct address.</p>
    </Jumbotron>
  </Layout>
)

export const pageQuery = graphql`
  query ContactThanksPagePropsQuery {
    site {
      ...SiteInformation
    }
  }
`

export default ContactThanksPage
