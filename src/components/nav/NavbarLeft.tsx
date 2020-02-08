import React from 'react'
import { Link } from 'gatsby'
import { Navbar } from 'react-bootstrap'
import { Author } from '../metadata'
import { PhotoCard } from '../photocard/PhotoCard'
import { NavSocialIcons } from '.'

import './NavbarLeft.scss'

interface NavbarLeftProps {
  readonly author: Author
  readonly children?: React.ReactNode | React.ReactNode[]
}

export const NavbarLeft = ({
  author: { name, jobTitle, linkedin, github, twitter },
  children
}: NavbarLeftProps) => (
  <Navbar
    id="navbar-left"
    className="d-none d-lg-flex flex-column navbar-dark bg-primary"
    role="navigation"
    as="nav"
  >
    <Navbar.Brand to="/" as={Link}>
      <PhotoCard {...{ name, jobTitle }} />
    </Navbar.Brand>
    <NavSocialIcons {...{ linkedin, github, twitter, className: 'mb-3' }} />
    {children}
  </Navbar>
)
