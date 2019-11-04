import React from 'react'
import { graphql } from 'gatsby'
import { Container, Col, Card, CardGroup, Nav as BootstrapNav } from 'react-bootstrap'
import { Link as ScrollSpyLink } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PhotoCard } from '../components/photocard/PhotoCard'
import { MainLayout as Layout } from '../components/layout'
import { Seo, SiteInformation, Author } from '../components/metadata'
import { Nav, NavSocialIcons } from '../components/nav'
import { TechnicalSkills } from '../components/about'
import { LabelledIcon, OriginalIcon } from '../components/icon'

interface BlogPostPageProps {
  data: {
    site: SiteInformation
    markdownRemark: {
      html: string
      frontmatter: {
        date: Date
        title: string
        description: string
        tags: string[]
      }
    }
  }
}

const BlogPostPage = ({ data }: BlogPostPageProps) => {
  return (
    <Layout author={data.site.siteMetadata.author}>
      <Seo
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.frontmatter.description}
        site={data.site}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    site {
      ...SiteInformation
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 120, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default BlogPostPage
