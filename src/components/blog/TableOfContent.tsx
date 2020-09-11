import React from 'react'
import * as _ from 'lodash'

export interface Title {
  title: string
  url: string
  items?: Title[]
}

const TocLevel = ({
  startLevel = 2,
  items = [],
  ...rest
}: TableOfContentProps & { className?: string }) => (
  <ul {...rest}>
    {items.map((item) => (
      <React.Fragment key={_.kebabCase(item.url)}>
        <li className={`toc-entry toc-h${startLevel}`}>
          <a href={item.url}>{item.title}</a>
        </li>
        {item.items && <TocLevel startLevel={startLevel + 1} items={item.items} />}
      </React.Fragment>
    ))}
  </ul>
)

export interface TableOfContentProps {
  startLevel?: number
  items?: Title[]
}

export const TableOfContent = (props: TableOfContentProps): JSX.Element => (
  <nav className="toc" aria-label="Text navigation">
    <TocLevel className="toc-nav" {...props} />
  </nav>
)
