import { graphql } from 'gatsby'

export interface SocialLinksTrait {
  linkedin?: string
  twitter?: string
  github?: string
  rss?: boolean
}

export type Author = GatsbyTypes.SiteSiteMetadataAuthor
export type SiteMetadata = GatsbyTypes.SiteSiteMetadata
export type SiteInformation = GatsbyTypes.SiteInformationFragment

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
        twitter
      }
      repository
    }
  }
`
