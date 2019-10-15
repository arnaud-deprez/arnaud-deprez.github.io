import React from 'react'
import { Nav as BootstrapNav } from 'react-bootstrap'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { SocialLinksTrait } from '../metadata'
import { Nav, NavProps } from './Nav'

export interface NavSocialIconsProps extends NavProps, SocialLinksTrait {
  className?: string
}

export const NavSocialIcons = ({
  linkedin,
  github,
  twitter,
  className,
  children
}: NavSocialIconsProps) => (
  <Nav className={`icons social-icons ${className || ''}`.trim()}>
    {linkedin && (
      <BootstrapNav.Link href={linkedin}>
        <FaLinkedin />
      </BootstrapNav.Link>
    )}
    {github && (
      <BootstrapNav.Link href={github}>
        <FaGithub />
      </BootstrapNav.Link>
    )}
    {twitter && (
      <BootstrapNav.Link href={twitter}>
        <FaTwitter />
      </BootstrapNav.Link>
    )}
    {children}
  </Nav>
)
