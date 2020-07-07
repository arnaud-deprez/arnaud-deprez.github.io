import React from 'react'
import { Link } from 'gatsby'
import { Navbar, Nav as BootstrapNav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Author, SocialLinksTrait } from '../metadata'
import { Nav } from './Nav'
import { NavSocialIcons } from './NavSocialIcons'

import './NavbarHeader.scss'

const NavHeader = (props: SocialLinksTrait) => (
  <>
    <Nav role="navigation">
      <BootstrapNav.Link to="/" as={Link}>
        <FontAwesomeIcon icon="user" className="mx-1" /> About
      </BootstrapNav.Link>
      <BootstrapNav.Link to="/blog/" as={Link}>
        <FontAwesomeIcon icon="blog" className="mx-1" /> Blog
      </BootstrapNav.Link>
      <BootstrapNav.Link to="/contact/" as={Link}>
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

export const NavbarHeader = ({
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
  return (
    <Navbar id="navbar-header" expand="lg" as="nav">
      <Navbar.Brand className="d-lg-none d-md-block" to="/" as={Link}>
        {name}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-header-menu" className="btn btn-primary">
        <FontAwesomeIcon icon="bars" />
      </Navbar.Toggle>
      <Navbar.Collapse id="navbar-header-menu" className="justify-content-end">
        <NavHeader rss={true} {...rest} />
      </Navbar.Collapse>
    </Navbar>
  )
}
