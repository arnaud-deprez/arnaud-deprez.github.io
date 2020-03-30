import React from 'react'
import * as _ from 'lodash'

export interface Title {
  title: string
  url: string
  items?: Title[]
}

const toListItem = (item: Title) => (
  <React.Fragment key={_.kebabCase(item.url)}>
    <li>
      <a href={item.url}>{item.title}</a>
    </li>
    {item.items && <ul>{item.items.map(toListItem)}</ul>}
  </React.Fragment>
)

export interface TableOfContentProps {
  items?: Title[]
}

export const TableOfContent = ({ items = [] }: TableOfContentProps) => (
  <nav className="table-of-content" aria-label="Text navigation">
    <ul>{items.map(toListItem)}</ul>
  </nav>
)
