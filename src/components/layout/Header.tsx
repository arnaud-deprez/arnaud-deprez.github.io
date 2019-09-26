import React from 'react'
import { NavbarHeader } from '../nav'

export interface HeaderProps {
  readonly title: string
}

export const Header = ({ title }: HeaderProps) => (
  <header>
    <NavbarHeader title={title} />
  </header>
)
