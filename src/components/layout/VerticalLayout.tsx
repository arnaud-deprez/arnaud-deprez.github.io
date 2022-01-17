import React from 'react'
import { SiteMetadata } from '../metadata'
import { Header } from './Header'
import { Footer } from './Footer'

import './VerticalLayout.scss'

export interface ContentLayoutProps {
  readonly siteMetadata?: SiteMetadata
  readonly children?: React.ReactNode | React.ReactNode[]
}

export const ContentLayout = ({ siteMetadata, children }: ContentLayoutProps): JSX.Element => {
  const author = siteMetadata?.author
  return (
    <div className="vertical-layout">
      <Header author={author} />
      <div className="vertical-content">{children}</div>
      <Footer copyright={siteMetadata?.copyright} />
    </div>
  )
}
