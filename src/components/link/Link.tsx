import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { useLocation } from '@gatsbyjs/reach-router'
import clsx from 'clsx'

export interface InitLinkProps<T extends React.ElementType>
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  href: any
  locale?: string
  replace?: boolean
  activeClassName?: string
  className?: string
  role?: string
  as?: T
}

type LinkProps<T extends React.ElementType> = InitLinkProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof InitLinkProps<T>>

// This assumes that any internal link (intended for Gatsby)
// will start with exactly one slash, and that anything else is external.
const isInternalRegex = /^\/(?!\/)/

const Link = React.forwardRef(function Link<T extends React.ElementType>(props: LinkProps<T>, ref) {
  const {
    activeClassName = 'active',
    className: classNameProps,
    href,
    children,
    as: As = 'a',
    ...other
  } = props

  const location = useLocation()
  const pathname = typeof href === 'string' ? href : href.pathname
  const className = clsx(classNameProps, {
    [activeClassName]: location.pathname === pathname && activeClassName,
  })

  const isInternal = isInternalRegex.test(pathname)

  if (isInternal) {
    return (
      <GatsbyLink
        className={className}
        activeClassName={activeClassName}
        to={href}
        // ref={ref}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }

  return (
    <As className={className} href={href} ref={ref} {...other}>
      {children}
    </As>
  )
})

export default Link as <T extends React.ElementType>(props: LinkProps<T>) => JSX.Element
