import React from 'react'
import { Seo, SiteInformation } from '../metadata'
import { Header } from './Header'
import { Footer } from './Footer'
import { loadIcons } from '../../config/IconLoader'

import './Layout.scss'

// TODO: move it elsewhere ?
loadIcons()

export interface LayoutProps {
  readonly title?: string
  readonly site: SiteInformation
  readonly children?: React.ReactNode | readonly React.ReactNode[]
}

export const Layout = ({ title, site, children }: LayoutProps) => (
  <>
    <Seo {...{ title, site }} />
    <Header title={site.siteMetadata.title} />
    <div className="content">{children}</div>
    <Footer />
  </>
)
