import React from 'react'
import { Link } from 'gatsby'
import { Navbar } from 'react-bootstrap'
import { Author } from '../metadata'
import { PhotoCard } from '../photocard/PhotoCard'
import { Nav, NavSocialIcons } from '.'

import './NavbarLeft.scss'

interface NavbarLeftProps {
  readonly author: Author
  readonly children?: React.ReactNode | React.ReactNode[]
}

export const NavbarLeft = ({
  author: { name, jobTitle, linkedin, github, twitter },
  children
}: NavbarLeftProps) => (
  <Navbar id="navbarLeft" className="d-none d-lg-flex flex-column navbar-dark bg-primary" as="nav">
    <Navbar.Brand to="/" as={Link}>
      <PhotoCard {...{ name, jobTitle }} />
    </Navbar.Brand>
    <NavSocialIcons {...{ linkedin, github, twitter }} />
    <Nav className="flex-column align-items-center">{children}</Nav>
  </Navbar>
)
