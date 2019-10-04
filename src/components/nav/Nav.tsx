import React from 'react'
import {
  Nav as BootstrapNav,
  NavProps as BootstrapNavProps,
  NavItemProps as BootstrapNavItemProps
} from 'react-bootstrap'

export type RenderChild = (from: React.ReactNode, index?: number) => React.ReactNode

function renderNavItem<As extends React.ElementType>({
  as = 'li',
  ...rest
}: BootstrapNavItemProps & React.ComponentPropsWithoutRef<As>): RenderChild {
  const renderItem = (children: React.ReactNode[], idx: number) => (
    <BootstrapNav.Item key={idx} as={as} {...rest}>
      {children}
    </BootstrapNav.Item>
  )
  return renderItem
}

export interface NavProps extends BootstrapNavProps {
  renderChild?: RenderChild
  children?: React.ReactNode | React.ReactNode[]
}

export function Nav<As extends React.ElementType>({
  as = 'ul',
  renderChild,
  children = [],
  ...rest
}: NavProps & React.ComponentPropsWithoutRef<As>) {
  const items: React.ElementType[] = React.Children.toArray(children || [])
  const _renderChild = renderChild || renderNavItem({})

  return (
    <BootstrapNav as={as} {...rest}>
      {items.map(_renderChild)}
    </BootstrapNav>
  )
}
