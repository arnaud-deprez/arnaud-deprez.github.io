import React from 'react'
import * as _ from 'lodash'
import { Link as ScrollSpyLink } from 'react-scroll'

import './TableOfContent.scss'

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
        <li className={`blog-toc-entry toc-h${startLevel}`}>
          <ScrollSpyLink
            activeClass="active"
            to={item.url.substring(1)}
            spy={true}
            smooth={true}
            duration={200}
            href={item.url}
          >
            {item.title}
          </ScrollSpyLink>
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
  <nav className="blog-toc" aria-label="Text navigation">
    <TocLevel className="blog-toc-level" {...props} />
  </nav>
)
