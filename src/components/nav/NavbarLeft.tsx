import React from 'react'
import { Link } from 'gatsby'
import { Navbar } from 'react-bootstrap'
import { Author } from '../metadata'
import { PhotoCard } from '../photocard/PhotoCard'
import { NavSocialIcons } from '.'

import './NavbarLeft.scss'

interface NavbarLeftProps {
  readonly author?: Author
  readonly children?: React.ReactNode | React.ReactNode[]
}

export const NavbarLeft = ({ author, children }: NavbarLeftProps) => (
  <Navbar
    id="navbar-left"
    className="d-none d-lg-flex flex-column navbar-dark bg-primary"
    role="navigation"
    as="nav"
  >
    <Navbar.Brand to="/" as={Link}>
      {author?.name && author?.jobTitle && (
        <PhotoCard name={author.name} jobTitle={author.jobTitle} />
      )}
    </Navbar.Brand>
    <NavSocialIcons
      {...{
        linkedin: author?.linkedin,
        github: author?.github,
        twitter: author?.twitter,
        className: 'mb-3',
      }}
    />
    {children}
  </Navbar>
)
