import React from 'react'
import { graphql } from 'gatsby'
import { MainLayout as Layout } from '../components/layout'
import { Seo, SiteInformation } from '../components/metadata'

export interface LegalPageProps {
  data: {
    site: SiteInformation
    markdownRemark: {
      frontmatter: {
        title: string
        date: Date
      }
      html: string
    }
  }
}

const LegalPage = ({ data }: LegalPageProps) => {
  return (
    <Layout author={data.site.siteMetadata.author}>
      <Seo site={data.site} title={data.markdownRemark.frontmatter.title} />
      <main>
        <h1 className="text-uppercase mb-0">{data.markdownRemark.frontmatter.title}</h1>
        <p className="text-muted mb-5">
          <em>Last updated on {data.markdownRemark.frontmatter.date}</em>
        </p>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query LegalPageQuery($slug: String!) {
    site {
      ...SiteInformation
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM Do YYYY")
      }
      html
    }
  }
`

export default LegalPage
