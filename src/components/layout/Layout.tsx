import React from 'react'
import { Author } from '../metadata'
import { Header } from './Header'
import { Footer } from './Footer'

import './Layout.scss'

export interface LayoutProps {
  readonly author: Author
  readonly children?: React.ReactNode | React.ReactNode[]
}

export const Layout = ({ author, children }: LayoutProps) => (
  <>
    <Header author={author} />
    <div className="content">{children}</div>
    <Footer />
  </>
)
