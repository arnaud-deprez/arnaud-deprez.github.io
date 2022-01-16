import React from 'react'
import Link from '../link/Link'
import { Nav as BootstrapNav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
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
  <Nav className={clsx('social-icons', className)} role={role}>
    {linkedin && (
      <BootstrapNav.Link
        href={linkedin}
        aria-label="Linked'In"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
        as={Link}
      >
        <FontAwesomeIcon
          icon={['fab', 'linkedin-in']}
          className={clsx(colorClassName('linkedin', useOriginalColor))}
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
        as={Link}
      >
        <FontAwesomeIcon
          icon={['fab', 'github']}
          className={clsx(colorClassName('github', useOriginalColor))}
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
        as={Link}
      >
        <FontAwesomeIcon
          icon={['fab', 'twitter']}
          className={clsx(colorClassName('twitter', useOriginalColor))}
        />
      </BootstrapNav.Link>
    )}
    {rss && (
      <BootstrapNav.Link
        href="/rss.xml"
        aria-label="Rss"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
        as={Link}
      >
        <FontAwesomeIcon icon="rss" className={clsx(colorClassName('orange', useOriginalColor))} />
      </BootstrapNav.Link>
    )}
    {children}
  </Nav>
)
