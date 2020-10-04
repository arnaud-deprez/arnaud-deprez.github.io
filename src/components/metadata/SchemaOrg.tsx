import React from 'react'
import { Helmet } from 'react-helmet'
import { SiteMetadata } from './SiteInformation'

export interface SchemaOrgProps {
  readonly url: string
  readonly isBlogPost: boolean
  readonly title?: string
  readonly description?: string
  readonly image?: string
  readonly datePublished?: string
  readonly siteMetadata: SiteMetadata
}

export const SchemaOrg = ({
  url,
  isBlogPost,
  title,
  description,
  image,
  datePublished,
  siteMetadata,
}: SchemaOrgProps): JSX.Element => {
  const baseSchema = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: siteMetadata.title,
      image,
    },
  ]

  const schema = isBlogPost
    ? [
        ...baseSchema,
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${siteMetadata.siteUrl}`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Blog',
              item: `${siteMetadata.siteUrl}/blog/`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: title,
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url,
          name: title,
          alternateName: siteMetadata.title,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
          author: {
            '@type': 'Person',
            name: siteMetadata.author?.name,
          },
          publisher: {
            '@type': 'Person',
            name: siteMetadata.author?.name,
          },
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': siteMetadata.siteUrl,
          },
          datePublished,
        },
      ]
    : baseSchema

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
