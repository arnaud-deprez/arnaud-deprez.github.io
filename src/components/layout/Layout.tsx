import React from 'react'
import { SiteMetadata } from '../metadata'
import { Header } from './Header'
import { Footer } from './Footer'

import './Layout.scss'

export interface LayoutProps {
  readonly siteMetadata: SiteMetadata
  readonly children?: React.ReactNode | React.ReactNode[]
}

export const Layout = ({ siteMetadata, children }: LayoutProps) => (
  <>
    <Header author={siteMetadata.author} />
    <div className="content">{children}</div>
    <Footer copyright={siteMetadata.copyright} />
  </>
)
