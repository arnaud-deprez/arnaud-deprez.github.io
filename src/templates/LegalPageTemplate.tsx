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
    <Layout siteMetadata={data.site.siteMetadata}>
      <Seo
        site={data.site}
        title={data.markdownRemark.frontmatter.title}
        description="Legal notice, terms of use, privacy and cookie policy"
      />
      <main>
        <h1 className="text-uppercase mb-0">{data.markdownRemark.frontmatter.title}</h1>
        <p className="text-muted">
          <em>Updated on {data.markdownRemark.frontmatter.date}</em>
        </p>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query LegalPageQuery($id: String!) {
    site {
      ...SiteInformation
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM Do YYYY")
      }
      html
    }
  }
`

export default LegalPage