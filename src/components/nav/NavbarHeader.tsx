import React from 'react'
import { Link } from 'gatsby'
import { Navbar, Nav as BootstrapNav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Author } from '../metadata'
import { Nav } from '.'

import './NavbarHeader.scss'

export const NavHeader = ({ linkedin, github, twitter }: Author) => (
  <>
    <Nav>
      <BootstrapNav.Link to="/" as={Link}>
        <FontAwesomeIcon icon="user" /> About
      </BootstrapNav.Link>
      <BootstrapNav.Link to="/blog" as={Link}>
        <FontAwesomeIcon icon="blog" /> Blog
      </BootstrapNav.Link>
      <BootstrapNav.Link to="/contact" as={Link}>
        <FontAwesomeIcon icon="envelope" /> Contact
      </BootstrapNav.Link>
    </Nav>
    <hr className="d-lg-none" />
    <Nav className="social-icons d-lg-none">
      {linkedin && (
        <BootstrapNav.Link href="#">
          <FontAwesomeIcon icon={['fab', 'linkedin']} /> {"Linked'in"}
        </BootstrapNav.Link>
      )}
      {github && (
        <BootstrapNav.Link href="#">
          <FontAwesomeIcon icon={['fab', 'github']} /> Github
        </BootstrapNav.Link>
      )}
      {twitter && (
        <BootstrapNav.Link href="#">
          <FontAwesomeIcon icon={['fab', 'twitter']} /> Twitter
        </BootstrapNav.Link>
      )}
    </Nav>
  </>
)

export interface NavbarHeaderProps {
  readonly title: string
  readonly author: Author
}

export const NavbarHeader = ({ title, author }: NavbarHeaderProps) => (
  <Navbar id="headerNavbar" expand="lg" fixed="top" as="nav">
    <Navbar.Brand className="d-lg-none d-md-block" to="/" as={Link}>
      {title}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-header">
      <FontAwesomeIcon icon="bars" />
    </Navbar.Toggle>
    <Navbar.Collapse id="navbar-header" className="justify-content-end">
      <NavHeader {...author} />
    </Navbar.Collapse>
  </Navbar>
)
