import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MainLayout as Layout } from '../components/layout'
import { Seo, SiteInformation } from '../components/metadata'

export interface LegalPageProps {
  data: {
    site: SiteInformation
    mdx: {
      frontmatter: {
        title: string
        date: Date
      }
      body: string
    }
  }
}

const LegalPage = ({ data }: LegalPageProps) => {
  return (
    <Layout siteMetadata={data.site.siteMetadata}>
      <Seo
        site={data.site}
        title={data.mdx.frontmatter.title}
        description="Legal notice, terms of use, privacy and cookie policy"
      />
      <main>
        <h1 className="text-uppercase mb-0">{data.mdx.frontmatter.title}</h1>
        <p className="text-muted">
          <em>Updated on {data.mdx.frontmatter.date}</em>
        </p>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query LegalPageQuery($id: String!) {
    site {
      ...SiteInformation
    }
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM Do YYYY")
      }
      body
    }
  }
`

export default LegalPage
