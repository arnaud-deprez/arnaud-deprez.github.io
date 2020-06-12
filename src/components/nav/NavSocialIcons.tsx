import React from 'react'
import { Link } from 'gatsby'
import { Nav as BootstrapNav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialLinksTrait } from '../metadata'
import { Nav, NavProps } from './Nav'

const colorClassName = (color: string, useOriginalColor: boolean) =>
  useOriginalColor ? `text-${color}` : ''

export interface NavSocialIconsProps extends NavProps, SocialLinksTrait {
  useOriginalColor?: boolean
  linkClassName?: string
}

export const NavSocialIcons = ({
  linkedin,
  github,
  twitter,
  rss = false,
  useOriginalColor = false,
  className,
  linkClassName = '',
  children,
  role = '',
}: NavSocialIconsProps): JSX.Element => (
  <Nav className={`social-icons ${className || ''}`.trim()} role={role}>
    {linkedin && (
      <BootstrapNav.Link
        href={linkedin}
        aria-label="Linked'In"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
      >
        <FontAwesomeIcon
          icon={['fab', 'linkedin-in']}
          className={colorClassName('linkedin', useOriginalColor)}
        />
      </BootstrapNav.Link>
    )}
    {github && (
      <BootstrapNav.Link
        href={github}
        aria-label="Github"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
      >
        <FontAwesomeIcon
          icon={['fab', 'github']}
          className={colorClassName('github', useOriginalColor)}
        />
      </BootstrapNav.Link>
    )}
    {twitter && (
      <BootstrapNav.Link
        href={twitter}
        aria-label="Twitter"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
      >
        <FontAwesomeIcon
          icon={['fab', 'twitter']}
          className={colorClassName('twitter', useOriginalColor)}
        />
      </BootstrapNav.Link>
    )}
    {rss && (
      <BootstrapNav.Link
        to="/rss.xml"
        aria-label="Rss"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
        as={Link}
      >
        <FontAwesomeIcon icon="rss" className={colorClassName('orange', useOriginalColor)} />
      </BootstrapNav.Link>
    )}
    {children}
  </Nav>
)
