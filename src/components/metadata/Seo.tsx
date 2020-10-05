import React from 'react'
import { Helmet } from 'react-helmet'
import { Location, WindowLocation } from '@reach/router'
import { SiteMetadata } from './SiteInformation'
import { SchemaOrg } from './SchemaOrg'
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

const imageUrl = (image = '', location: WindowLocation) =>
  image ? location.origin + image : `${location.origin}/icons/icon-144x144.png`

export interface SeoProps {
  readonly lang?: string
  readonly title?: string
  readonly titleTemplate?: string
  readonly description?: string
  readonly image?: string
  readonly meta?: MetaProps[]
  readonly isBlogPost?: boolean
  readonly datePublished?: string
  readonly siteMetadata?: SiteMetadata
}

export const Seo = React.memo(
  ({
    lang = 'en',
    title = '',
    titleTemplate = undefined,
    description = '',
    image,
    meta = [],
    isBlogPost = false,
    datePublished,
    siteMetadata: siteMetadataArg,
  }: SeoProps): JSX.Element => {
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
        content: `${isBlogPost ? 'article' : 'website'}`,
      },
      ...twitterMeta(twitterAccronym),
      ...meta,
    ]
    return (
      <Location>
        {({ location }) => (
          <>
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
                {
                  property: 'og:image',
                  content: imageUrl(image, location),
                },
                ...concatenatedMeta,
              ]}
            />
            <SchemaOrg
              url={location.href}
              isBlogPost={isBlogPost}
              title={metaTitle}
              description={metaDescription}
              image={imageUrl(image, location)}
              datePublished={datePublished}
              siteMetadata={siteMetadata}
            />
          </>
        )}
      </Location>
    )
  }
)
