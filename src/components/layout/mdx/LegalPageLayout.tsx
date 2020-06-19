import React from 'react'
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

const LegalPageLayout = ({ pageContext, children }: LegalPageProps): JSX.Element => {
  const { frontmatter } = pageContext
  if (!frontmatter) {
    throw new Error('IndexPageLayout: frontmatter.section is undefined')
  }
  return (
    <Layout>
      <Seo
        title={frontmatter.title}
        description="Legal notice, terms of use, privacy and cookie policy"
      />
      {frontmatter.title && frontmatter.date && children && (
        <main>
          <article>
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
          </article>
        </main>
      )}
    </Layout>
  )
}

export default LegalPageLayout
