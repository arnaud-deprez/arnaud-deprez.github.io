import React from 'react'
import { MainLayout as Layout } from '../../components/layout'
import { Seo } from '../../components/metadata'

const ContactThanksPage = () => (
  <Layout>
    <Seo title="Thanks for Contacting" />
    <main>
      <h1>Thank you</h1>
      <p>{"Thank you for your message, I'll try to get back to you as soon as possible."}</p>
    </main>
  </Layout>
)

export default ContactThanksPage
