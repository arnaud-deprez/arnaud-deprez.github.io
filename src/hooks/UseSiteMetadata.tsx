import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = (): GatsbyTypes.SiteSiteMetadata => {
  const { site } = useStaticQuery<GatsbyTypes.SiteMetaDataQuery>(
    graphql`
      query SiteMetaData {
        site {
          ...SiteInformation
        }
      }
    `
  )
  if (!site || !site.siteMetadata) {
    throw Error('Cannot retrieve site information!')
  }
  return site.siteMetadata
}

export default useSiteMetadata
