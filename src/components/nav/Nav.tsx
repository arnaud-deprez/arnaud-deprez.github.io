import React from 'react'
import { Nav as BootstrapNav, NavProps as BootstrapNavProps } from 'react-bootstrap'

export type RenderChild = (from: React.ReactNode, index?: number) => React.ReactNode

const renderNavItem = <As extends React.ElementType>({
  as = 'li',
  ...rest
}: React.ComponentPropsWithoutRef<As>): RenderChild => {
  const renderItem = (children: React.ReactNode | React.ReactNode[], idx: number) => (
    <BootstrapNav.Item key={idx} as={as} {...rest}>
      {children}
    </BootstrapNav.Item>
  )
  return renderItem
}

export interface NavProps extends BootstrapNavProps {
  className?: string
  renderChild?: RenderChild
  children?: React.ReactNode | React.ReactNode[]
}

export const Nav = <As extends React.ElementType>({
  as = 'ul',
  renderChild,
  children = [],
  ...rest
}: NavProps & React.ComponentPropsWithoutRef<As>): JSX.Element => {
  const items = React.Children.toArray(children || [])
  const _renderChild = renderChild || renderNavItem({})

  return (
    <BootstrapNav as={as} {...rest}>
      {items.map(_renderChild)}
    </BootstrapNav>
  )
}
