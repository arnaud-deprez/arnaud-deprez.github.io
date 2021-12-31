import React from 'react'
import { MainLayout as Layout } from '../components/layout'
import { Seo } from '../components/metadata'

const NotFoundPage = (): JSX.Element => (
  <Layout>
    <Seo title="Not Found" description="Oups, you may find an unexpected path" />
    <div className="main">
      <h1>Nothing Here</h1>
      <p>Check that you followed the correct address...</p>
    </div>
  </Layout>
)

export default NotFoundPage
