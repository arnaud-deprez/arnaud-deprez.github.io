import React from 'react'
import { graphql } from 'gatsby'
import { Container, Nav as BootstrapNav } from 'react-bootstrap'
import { FaEnvelope } from 'react-icons/fa'
import { MainLayout as Layout } from '../../components/layout'
import { Seo } from '../../components/metadata'
import { PhotoCard } from '../../components/photocard/PhotoCard'
import { NavSocialIcons } from '../../components/nav'
import { ContactForm } from '../../components/form'

interface ContactPageProps {
  data: GatsbyTypes.ContactPageQuery
}

const ContactPage = ({ data }: ContactPageProps) => {
  const author = data.site?.siteMetadata?.author
  if (!author?.name) {
    throw new Error('ContactPage: author.name is required!')
  }
  return (
    <Layout siteMetadata={data.site?.siteMetadata}>
      <Seo
        title="Contact"
        description={`Contact information of ${author?.name}`}
        site={data.site}
      />
      <main>
        <PhotoCard className="mb-4 d-lg-none" />
        <Container className="d-flex flex-column align-items-center">
          <h1 className="text-center">Reach me on</h1>
          <NavSocialIcons
            useOriginalColor
            linkedin={author?.linkedin}
            twitter={author?.twitter}
            className="h3 mb-5"
          >
            <BootstrapNav.Link href={`mailto:${author?.email}`}>
              <FaEnvelope className="text-secondary" />
            </BootstrapNav.Link>
          </NavSocialIcons>
          <ContactForm id="contact" />
        </Container>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ContactPage {
    site {
      ...SiteInformation
    }
  }
`

export default ContactPage
