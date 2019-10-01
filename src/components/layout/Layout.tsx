import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

import './Layout.scss'

export interface LayoutProps {
  readonly headerTitle: string
  readonly children?: React.ReactNode | readonly React.ReactNode[]
}

export const Layout = ({ headerTitle, children }: LayoutProps) => (
  <>
    <Header title={headerTitle} />
    <div className="content">{children}</div>
    <Footer />
  </>
)
