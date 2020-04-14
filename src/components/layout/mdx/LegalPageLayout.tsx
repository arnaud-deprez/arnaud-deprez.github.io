import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Moment from 'react-moment'
import { MainLayout as Layout } from '../../layout'
import { Seo } from '../../metadata'

interface Fronmatter {
  title?: string
  date?: string
}

export interface LegalPageProps {
  pageContext: {
    frontmatter?: Fronmatter
  }
  children: React.ReactNode[]
}

const LegalPageLayout = ({ pageContext, children }: LegalPageProps) => {
  const { siteInfo } = useStaticQuery<GatsbyTypes.LegalPageLayoutQuery>(
    graphql`
      query LegalPageLayout {
        siteInfo: site {
          ...SiteInformation
        }
      }
    `
  )
  if (!siteInfo?.siteMetadata) {
    throw new Error('IndexPageLayout: siteMetadata is undefined')
  }
  const { frontmatter } = pageContext
  if (!frontmatter) {
    throw new Error('IndexPageLayout: frontmatter.section is undefined')
  }
  return (
    <Layout siteMetadata={siteInfo?.siteMetadata}>
      <Seo
        site={siteInfo}
        title={frontmatter.title}
        description="Legal notice, terms of use, privacy and cookie policy"
      />
      {frontmatter.title && frontmatter.date && children && (
        <main>
          <h1 className="text-uppercase mb-0">{frontmatter.title}</h1>
          <p className="text-muted">
            <em>
              Updated on{' '}
              <Moment interval={0} format="MMMM Do YYYY">
                {frontmatter.date}
              </Moment>
            </em>
          </p>
          {children}
        </main>
      )}
    </Layout>
  )
}

export default LegalPageLayout
