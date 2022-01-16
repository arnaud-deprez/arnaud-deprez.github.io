import React from 'react'
import Link from '../link/Link'
import { Navbar, Nav as BootstrapNav, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Author, SocialLinksTrait } from '../metadata'
import { useMediaLg } from '../../hooks/useMediaQueries'
import { withClientOnlyRendering } from '../../hooks/useIsClient'
import { Nav } from './Nav'
import { NavSocialIcons } from './NavSocialIcons'

import './NavbarHeader.scss'

const NavHeader = (props: SocialLinksTrait) => (
  <>
    <Nav role="navigation">
      <BootstrapNav.Link href="/" as={Link}>
        <FontAwesomeIcon icon="user" className="mx-1" /> About
      </BootstrapNav.Link>
      <BootstrapNav.Link href="/blog/" as={Link}>
        <FontAwesomeIcon icon="blog" className="mx-1" /> Blog
      </BootstrapNav.Link>
      <BootstrapNav.Link href="/contact/" as={Link}>
        <FontAwesomeIcon icon="envelope" className="mx-1" /> Contact
      </BootstrapNav.Link>
    </Nav>
    <hr className="d-lg-none" />
    <NavSocialIcons className="d-lg-none flex-row justify-content-center" {...props} />
  </>
)

export interface NavbarHeaderProps {
  readonly author?: Author
}

const InternalNavbarHeader = ({
  author = {
    name: '',
    jobTitle: undefined,
    email: undefined,
    linkedin: undefined,
    twitter: undefined,
    github: undefined,
  },
}: NavbarHeaderProps): JSX.Element => {
  const { name, ...rest } = author
  const isLg = useMediaLg()
  const bg = isLg ? undefined : 'primary'
  const variant = isLg ? 'light' : 'dark'
  return (
    <Navbar id="navbar-header" expand="lg" as="nav" bg={bg} variant={variant}>
      <Container fluid>
        <Navbar.Brand className="d-lg-none" href="/" as={Link}>
          {name}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-header-menu" className="btn btn-primary">
          <FontAwesomeIcon icon="bars" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-header-menu" className="justify-content-end">
          <NavHeader rss={true} {...rest} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export const NavbarHeader = withClientOnlyRendering(InternalNavbarHeader)
