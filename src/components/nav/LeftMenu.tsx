import React from 'react'
import { Link } from 'gatsby'
import { Navbar, Nav as BootstrapNav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SiteMetadata } from '../metadata'
import { Nav } from './Nav'
import { PhotoCard } from '../PhotoCard'

import './LeftMenu.scss'

interface LeftMenuProps {
  metadata: SiteMetadata
  children?: React.ReactNode[]
}

export const LeftMenu = ({
  metadata: {
    author: { name, jobTitle, linkedin, github, twitter }
  },
  children
}: LeftMenuProps) => (
  <Navbar id="leftNavbar" className="d-none d-lg-flex flex-column" as="nav">
    <Navbar.Brand to="/" as={Link}>
      <PhotoCard className="align-items-center border-0" {...{ name, jobTitle }} />
    </Navbar.Brand>
    <Nav className="social-icons">
      {linkedin && (
        <BootstrapNav.Link href="#">
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </BootstrapNav.Link>
      )}
      {github && (
        <BootstrapNav.Link href="#">
          <FontAwesomeIcon icon={['fab', 'github']} />
        </BootstrapNav.Link>
      )}
      {twitter && (
        <BootstrapNav.Link href="#">
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </BootstrapNav.Link>
      )}
    </Nav>
    <Nav className="flex-column align-items-center w-100">{children}</Nav>
  </Navbar>
)
