import React from 'react'
import { Link } from 'gatsby'
import { Navbar, Nav as BootstrapNav } from 'react-bootstrap'
import { FaBars, FaUser, FaEnvelope } from 'react-icons/fa'
import { Author, SocialLinksTrait } from '../metadata'
import { Nav, NavSocialIcons } from '.'

import './NavbarHeader.scss'

export const NavHeader = (props: SocialLinksTrait) => (
  <>
    <Nav className="icons">
      <BootstrapNav.Link to="/" as={Link}>
        <FaUser /> About
      </BootstrapNav.Link>
      {/* <BootstrapNav.Link to="/blog" as={Link}>
        <FaBlog /> Blog
      </BootstrapNav.Link> */}
      <BootstrapNav.Link to="/contact" as={Link}>
        <FaEnvelope /> Contact
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
  <Navbar id="headerNavbar" expand="lg" fixed="top" as="nav">
    <Navbar.Brand className="d-lg-none d-md-block" to="/" as={Link}>
      {name}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-header">
      <FaBars />
    </Navbar.Toggle>
    <Navbar.Collapse id="navbar-header" className="justify-content-end">
      <NavHeader {...rest} />
    </Navbar.Collapse>
  </Navbar>
)
