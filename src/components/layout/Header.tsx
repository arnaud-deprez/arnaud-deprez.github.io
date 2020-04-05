import React from 'react'
import { Author } from '../metadata'
import { NavbarHeader } from '../nav'

export interface HeaderProps {
  readonly author?: Author
}

export const Header = (props: HeaderProps) => (
  <header>
    <NavbarHeader {...props} />
  </header>
)
