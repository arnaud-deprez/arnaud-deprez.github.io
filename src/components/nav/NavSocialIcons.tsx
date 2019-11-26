import React from 'react'
import { Nav as BootstrapNav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
  children,
  role = ''
}: NavSocialIconsProps) => (
  <Nav className={`social-icons ${className || ''}`.trim()} role={role}>
    {linkedin && (
      <BootstrapNav.Link href={linkedin} aria-label="Linked'In">
        <FontAwesomeIcon
          icon={['fab', 'linkedin']}
          className={colorClassName('linkedin', useOriginalColor)}
        />
      </BootstrapNav.Link>
    )}
    {github && (
      <BootstrapNav.Link href={github} aria-label="Github">
        <FontAwesomeIcon
          icon={['fab', 'github']}
          className={colorClassName('github', useOriginalColor)}
        />
      </BootstrapNav.Link>
    )}
    {twitter && (
      <BootstrapNav.Link href={twitter} aria-label="Twitter">
        <FontAwesomeIcon
          icon={['fab', 'twitter']}
          className={colorClassName('twitter', useOriginalColor)}
        />
      </BootstrapNav.Link>
    )}
    {children}
  </Nav>
)
