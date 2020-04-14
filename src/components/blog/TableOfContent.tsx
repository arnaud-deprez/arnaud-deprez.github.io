import React from 'react'
import * as _ from 'lodash'

export interface Title {
  title: string
  url: string
  items?: Title[]
}

const toListItem = (level = 2, item: Title) => (
  <React.Fragment key={_.kebabCase(item.url)}>
    <li className={`toc-entry toc-h${level}`}>
      <a href={item.url}>{item.title}</a>
    </li>
    {item.items && <TocLevel startLevel={level + 1} items={item.items} />}
  </React.Fragment>
)

const TocLevel = ({
  startLevel,
  items = [],
  ...rest
}: TableOfContentProps & { className?: string }) => (
  <ul {...rest}>{items.map((it) => toListItem(startLevel, it))}</ul>
)

export interface TableOfContentProps {
  startLevel?: number
  items?: Title[]
}

export const TableOfContent = (props: TableOfContentProps) => (
  <nav className="toc" aria-label="Text navigation">
    <TocLevel className="toc-nav" {...props} />
  </nav>
)
