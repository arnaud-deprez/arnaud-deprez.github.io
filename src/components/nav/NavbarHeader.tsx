import React from 'react'
import { Link } from 'gatsby'
import { Navbar, Nav as BootstrapNav } from 'react-bootstrap'
import { Nav } from '.'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './NavbarHeader.scss'

export const NavHeader = () => (
  <Nav>
    <BootstrapNav.Link to="/" as={Link}>
      <FontAwesomeIcon icon="user" /> About
    </BootstrapNav.Link>
    <BootstrapNav.Link to="/blog" as={Link}>
      <FontAwesomeIcon icon="blog" /> Blog
    </BootstrapNav.Link>
  </Nav>
)

export interface NavbarHeaderProps {
  readonly title: string
}

export const NavbarHeader = ({ title }: NavbarHeaderProps) => (
  <Navbar expand="lg" fixed="top" as="nav">
    <Navbar.Brand className="d-lg-none d-md-block" to="/" as={Link}>
      {title}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-header" />
    <Navbar.Collapse id="navbar-header" className="justify-content-end">
      <NavHeader />
    </Navbar.Collapse>
  </Navbar>
)
