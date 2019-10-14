import React from 'react'
import { graphql } from 'gatsby'
import { Container, Nav as BootstrapNav } from 'react-bootstrap'
import { FaEnvelope } from 'react-icons/fa'
import { MainLayout as Layout } from '../../components/layout'
import { Seo, SiteInformation } from '../../components/metadata'
import { ContactForm } from '../../components/form'
import { NavSocialIcons } from '../../components/nav'
import { PhotoCard } from '../../components/photocard/PhotoCard'

interface ContactPageProps {
  data: {
    site: SiteInformation
  }
}

const ContactPage = ({ data }: ContactPageProps) => (
  <Layout author={data.site.siteMetadata.author}>
    <Seo title="Contact" description="Contact information page" site={data.site} />
    <section>
      <Container className="d-flex flex-column align-items-center">
        <PhotoCard className="photo-card mb-4 d-lg-none" />
        <h2 className="text-center">Reach me on</h2>
        <NavSocialIcons
          linkedin={data.site.siteMetadata.author.linkedin}
          twitter={data.site.siteMetadata.author.twitter}
          className="h3 mb-5"
        >
          <BootstrapNav.Link href={`mailto:${data.site.siteMetadata.author.email}`}>
            <FaEnvelope />
          </BootstrapNav.Link>
        </NavSocialIcons>
        <ContactForm />
      </Container>
    </section>
  </Layout>
)

export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      ...SiteInformation
    }
  }
`

export default ContactPage
