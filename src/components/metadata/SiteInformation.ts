import { graphql } from 'gatsby'

export interface SiteInformation {
  buildTime: Date
  siteMetadata: SiteMetadata
}

export interface SiteMetadata {
  title: string
  job: string
  description: string
  copyright: string
  siteUrl: string
  author: {
    name: string
    jobTitle: string
    email?: string
    linkedin?: string
    twitter?: string
    github?: string
    rss?: string
  }
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
