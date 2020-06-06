import React from 'react'
import { Helmet } from 'react-helmet'
import { Location, WindowLocation } from '@reach/router'
import { SiteMetadata } from './SiteInformation'
import useSiteMetadata from '../../hooks/UseSiteMetadata'

type MetaProps = JSX.IntrinsicElements['meta']

const twitterMeta = (twitterAccronym = '') => {
  if (!twitterAccronym) {
    return []
  }
  return [
    {
      name: `twitter:site`,
      content: twitterAccronym,
    },
    {
      name: `twitter:creator`,
      content: twitterAccronym,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
  ]
}

const imageMeta = (image = '', location: WindowLocation) => {
  if (!image) {
    return [
      {
        property: 'og:image',
        content: `${location.origin}/icons/icon-144x144.png`,
      },
    ]
  }
  return [
    {
      property: 'og:image',
      content: location.origin + image,
    },
  ]
}
export interface SeoProps {
  readonly lang?: string
  readonly title?: string
  readonly titleTemplate?: string
  readonly description?: string
  readonly image?: string
  readonly meta?: MetaProps[]
  readonly siteMetadata?: SiteMetadata
}

export const Seo = ({
  lang = 'en',
  title = '',
  titleTemplate = undefined,
  description = '',
  image = '',
  meta = [],
  siteMetadata: siteMetadataArg,
}: SeoProps) => {
  const siteMetadata = siteMetadataArg || useSiteMetadata()
  const metaTitle = title || siteMetadata?.title
  const metaDescription = description || siteMetadata?.description
  let twitterAccronym
  if (siteMetadata?.author?.twitter) {
    twitterAccronym = `@${siteMetadata.author.twitter.substring(
      siteMetadata.author.twitter.lastIndexOf('/') + 1
    )}`
  }
  const concatenatedMeta: MetaProps[] = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: metaTitle,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    ...twitterMeta(twitterAccronym),
    ...meta,
  ]
  return (
    <Location>
      {({ location }) => (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          titleTemplate={titleTemplate || `%s | ${siteMetadata?.author?.name}`}
          title={title}
          defaultTitle={siteMetadata?.title}
          meta={[
            {
              property: `og:url`,
              content: location.href,
            },
            ...imageMeta(image, location),
            ...concatenatedMeta,
          ]}
        />
      )}
    </Location>
  )
}
