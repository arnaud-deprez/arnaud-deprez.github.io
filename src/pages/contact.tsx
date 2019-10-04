import React from 'react'
import { graphql } from 'gatsby'
import { MainLayout as Layout } from '../components/layout'
import { Seo, SiteInformation } from '../components/metadata'

import './index.scss'

interface ContactPageProps {
  data: {
    site: SiteInformation
  }
}

const ContactPage = ({ data }: ContactPageProps) => (
  <Layout author={data.site.siteMetadata.author}>
    <Seo title="Contact" site={data.site} />
  </Layout>
)

export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      ...SiteInformation
    }
  }
`

export default ContactPage
