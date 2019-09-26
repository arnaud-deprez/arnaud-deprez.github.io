import React from 'react'
import { Helmet } from 'react-helmet'
import { SiteInformation } from './SiteInformation'

type MetaProps = JSX.IntrinsicElements['meta']

export interface SeoProps {
  readonly lang?: string
  readonly title?: string
  readonly description?: string
  readonly meta?: MetaProps[]
  readonly site: SiteInformation
}

export const Seo = ({ lang = 'en', title = '', description = '', meta = [], site }: SeoProps) => {
  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  const concatenatedMeta: MetaProps[] = [
    {
      name: `description`,
      content: metaDescription
    },
    {
      property: `og:title`,
      content: metaTitle
    },
    {
      property: `og:description`,
      content: metaDescription
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      name: `twitter:card`,
      content: `summary`
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author.name
    },
    {
      name: `twitter:title`,
      content: metaTitle
    },
    {
      name: `twitter:description`,
      content: metaDescription
    },
    ...meta
  ]
  return (
    <Helmet
      html={{
        lang
      }}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      title={title}
      defaultTitle={site.siteMetadata.title}
      meta={concatenatedMeta}
    />
  )
}
