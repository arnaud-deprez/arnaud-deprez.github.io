import React from 'react'
import { graphql } from 'gatsby'
import { MainLayout as Layout } from '../../components/layout'
import { Seo } from '../../components/metadata'

interface ContactThanksPageProps {
  data: GatsbyTypes.ContactThanksPageQuery
}

const ContactThanksPage = ({ data }: ContactThanksPageProps) => (
  <Layout siteMetadata={data.site?.siteMetadata}>
    <Seo title="Thanks for Contacting" {...data} />
    <main>
      <h1>Thank you</h1>
      <p>{"Thank you for your message, I'll try to get back to you as soon as possible."}</p>
    </main>
  </Layout>
)

export const pageQuery = graphql`
  query ContactThanksPage {
    site {
      ...SiteInformation
    }
  }
`

export default ContactThanksPage
