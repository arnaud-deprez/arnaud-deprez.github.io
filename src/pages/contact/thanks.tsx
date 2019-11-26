import React from 'react'
import { graphql } from 'gatsby'
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
    <section>
      <h1>Thank you</h1>
      <p>{"Thank you for your message, I'll try to get back to you as soon as possible."}</p>
    </section>
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
