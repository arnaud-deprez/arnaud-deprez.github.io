import React from 'react'
import { Nav as BootstrapNav } from 'react-bootstrap'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { SocialLinksTrait } from '../metadata'
import { Nav, NavProps } from './Nav'

const colorClassName = (color: string, useOriginalColor: boolean) =>
  useOriginalColor ? `text-${color}` : ''

export interface NavSocialIconsProps extends NavProps, SocialLinksTrait {
  useOriginalColor?: boolean
  className?: string
}

export const NavSocialIcons = ({
  linkedin,
  github,
  twitter,
  useOriginalColor = false,
  className,
  children
}: NavSocialIconsProps) => (
  <Nav className={`icons social-icons ${className || ''}`.trim()}>
    {linkedin && (
      <BootstrapNav.Link href={linkedin}>
        <FaLinkedin className={colorClassName('linkedin', useOriginalColor)} />
      </BootstrapNav.Link>
    )}
    {github && (
      <BootstrapNav.Link href={github}>
        <FaGithub className={colorClassName('github', useOriginalColor)} />
      </BootstrapNav.Link>
    )}
    {twitter && (
      <BootstrapNav.Link href={twitter}>
        <FaTwitter className={colorClassName('twitter', useOriginalColor)} />
      </BootstrapNav.Link>
    )}
    {children}
  </Nav>
)
