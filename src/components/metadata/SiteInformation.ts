import { graphql } from 'gatsby'

export interface SocialLinksTrait {
  linkedin?: string
  twitter?: string
  github?: string
  rss?: string
}

export interface Author extends SocialLinksTrait {
  name: string
  jobTitle: string
  email?: string
}

export interface SiteMetadata {
  title: string
  job: string
  description: string
  copyright: string
  siteUrl: string
  author: Author
}

export interface SiteInformation {
  buildTime: Date
  siteMetadata: SiteMetadata
}

export const SiteMetadataQueryFragment = graphql`
  fragment SiteInformation on Site {
    buildTime
    siteMetadata {
      title
      description
      siteUrl
      copyright
      author {
        name
        jobTitle
        email
        github
        linkedin
        rss
        twitter
      }
    }
  }
`
