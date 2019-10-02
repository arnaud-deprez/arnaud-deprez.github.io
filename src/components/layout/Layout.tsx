import React from 'react'
import { Author } from '../metadata'
import { Header } from './Header'
import { Footer } from './Footer'

import './Layout.scss'

export interface LayoutProps {
  readonly headerTitle: string
  readonly author: Author
  readonly children?: React.ReactNode | readonly React.ReactNode[]
}

export const Layout = ({ headerTitle: title, author, children }: LayoutProps) => (
  <>
    <Header {...{ title, author }} />
    <div className="content">{children}</div>
    <Footer />
  </>
)
