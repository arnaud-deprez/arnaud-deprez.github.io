import React from 'react'
import { Helmet } from 'react-helmet'
import { SiteInformation } from './SiteInformation'

type MetaProps = JSX.IntrinsicElements['meta']

const twitterMeta = (twitterAccronym = '') => {
  if (!twitterAccronym) {
    return []
  }
  return [
    {
      name: `twitter:site`,
      content: twitterAccronym
    },
    {
      name: `twitter:creator`,
      content: twitterAccronym
    },
    {
      name: `twitter:card`,
      content: `summary`
    }
  ]
}

const imageMeta = (image = '') => {
  if (!image) {
    return [
      {
        property: 'og:image',
        content: 'icons/icon-144x144.png'
      }
    ]
  }
  return [
    {
      property: 'og:image',
      content: image
    }
  ]
}
export interface SeoProps {
  readonly lang?: string
  readonly title?: string
  readonly description?: string
  readonly image?: string
  readonly meta?: MetaProps[]
  readonly site: SiteInformation
}

export const Seo = ({
  lang = 'en',
  title = '',
  description = '',
  image = '',
  meta = [],
  site
}: SeoProps) => {
  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  let twitterAccronym
  if (site.siteMetadata.author.twitter) {
    twitterAccronym = `@${site.siteMetadata.author.twitter.substring(
      site.siteMetadata.author.twitter.lastIndexOf('/') + 1
    )}`
  }
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
    ...imageMeta(image),
    ...twitterMeta(twitterAccronym),
    ...meta
  ]
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      title={title}
      defaultTitle={site.siteMetadata.title}
      meta={concatenatedMeta}
    />
  )
}
