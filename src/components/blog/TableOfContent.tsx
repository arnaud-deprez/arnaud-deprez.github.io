import React from 'react'
import { Nav as BootstrapNav } from 'react-bootstrap'
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
  <BootstrapNav className="blog-toc-level" {...rest} as="ul">
    {items.map((item) => (
      <React.Fragment key={_.kebabCase(item.url.substring(1))}>
        <BootstrapNav.Item className={`blog-toc-entry toc-h${startLevel}`} as="li">
          <BootstrapNav.Link
            className="p-0 mb-2"
            activeClass="active"
            to={item.url.substring(1)}
            spy={true}
            smooth={true}
            duration={200}
            as={ScrollSpyLink}
          >
            {item.title}
          </BootstrapNav.Link>
        </BootstrapNav.Item>
        {item.items && (
          <BootstrapNav.Item as="li">
            <TocLevel startLevel={startLevel + 1} items={item.items} />
          </BootstrapNav.Item>
        )}
      </React.Fragment>
    ))}
  </BootstrapNav>
)

export interface TableOfContentProps {
  startLevel?: number
  items?: Title[]
}

export const TableOfContent = (props: TableOfContentProps): JSX.Element => (
  <nav className="blog-toc" aria-label="Text navigation">
    <TocLevel {...props} />
  </nav>
)
