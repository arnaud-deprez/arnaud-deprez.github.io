import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Container, Nav as BootstrapNav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MainLayout as Layout } from '../../components/layout'
import { Seo } from '../../components/metadata'
import { PhotoCard } from '../../components/photocard/PhotoCard'
import { NavSocialIcons } from '../../components/nav'
import { ContactForm } from '../../components/form'
import { Queries } from '@testing-library/react'

const ContactPage = ({ data }: PageProps<Queries.ContactPage>): JSX.Element => {
  const author = data.site?.siteMetadata?.author
  if (!author?.name) {
    throw new Error('ContactPage: author.name is required!')
  }
  return (
    <Layout siteMetadata={data.site?.siteMetadata}>
      <Seo
        title="Contact"
        description={`Contact information of ${author?.name}`}
        siteMetadata={data.site?.siteMetadata}
      />
      <main>
        <PhotoCard className="mb-4 d-lg-none" />
        <Container className="d-flex flex-column align-items-center">
          <h1 className="text-center">Reach me on</h1>
          <NavSocialIcons
            linkedin={author?.linkedin}
            twitter={author?.twitter}
            className="h4 mb-5"
            linkClassName="icon-round-wrapper btn btn-bg-dark me-2"
          >
            <BootstrapNav.Link
              href={`mailto:${author?.email}`}
              aria-label="Email me"
              className="icon-round-wrapper btn btn-bg-dark"
            >
              <FontAwesomeIcon icon="envelope" />
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
