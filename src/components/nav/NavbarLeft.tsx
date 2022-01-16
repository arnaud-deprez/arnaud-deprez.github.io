import React from 'react'
import Link from '../link/Link'
import { Navbar, NavbarProps, Container } from 'react-bootstrap'
import { Author } from '../metadata'
import { PhotoCard } from '../photocard/PhotoCard'
import { NavSocialIcons } from './NavSocialIcons'

import './NavbarLeft.scss'

export interface NavbarLeftProps extends NavbarProps {
  readonly author?: Author
  readonly children?: React.ReactNode | React.ReactNode[]
}

export const NavbarLeft = ({ author, children, ...rest }: NavbarLeftProps): JSX.Element => (
  <Navbar id="navbar-left" role="navigation" bg="primary" variant="dark" as="nav" {...rest}>
    <Container fluid>
      <Navbar.Brand href="/" as={Link}>
        {author?.name && author?.jobTitle && (
          <PhotoCard name={author.name} jobTitle={author.jobTitle} />
        )}
      </Navbar.Brand>
      <NavSocialIcons
        {...{
          linkedin: author?.linkedin,
          github: author?.github,
          twitter: author?.twitter,
          rss: true,
          className: 'mb-3',
        }}
      />
      {children}
    </Container>
  </Navbar>
)
