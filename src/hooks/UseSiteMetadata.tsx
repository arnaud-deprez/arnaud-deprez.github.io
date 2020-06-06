import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery<GatsbyTypes.SiteMetaDataQuery>(
    graphql`
      query SiteMetaData {
        site {
          ...SiteInformation
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
