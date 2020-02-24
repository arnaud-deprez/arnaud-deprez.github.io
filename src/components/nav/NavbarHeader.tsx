import React from 'react'
import { Link } from 'gatsby'
import { Navbar, Nav as BootstrapNav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Author, SocialLinksTrait } from '../metadata'
import { Nav, NavSocialIcons } from '.'

import './NavbarHeader.scss'

export const NavHeader = (props: SocialLinksTrait) => (
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
  readonly author: Author
}

export const NavbarHeader = ({ author: { name, ...rest } }: NavbarHeaderProps) => (
  <Navbar id="navbar-header" expand="lg" as="nav">
    <Navbar.Brand className="d-lg-none d-md-block" to="/" as={Link}>
      {name}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-header">
      <FontAwesomeIcon icon="bars" />
    </Navbar.Toggle>
    <Navbar.Collapse id="navbar-header" className="justify-content-end">
      <NavHeader {...rest} />
    </Navbar.Collapse>
  </Navbar>
)
