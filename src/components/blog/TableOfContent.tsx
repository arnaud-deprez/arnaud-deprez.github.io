import React from 'react'
import * as _ from 'lodash'

export interface Title {
  title: string
  url: string
  items?: Title[]
}
// export interface Heading {
//   value: string
//   depth: number
//   headings?: Heading[]
// }

// const toEmbeddedList = (acc: Heading[], b: Heading, idx: number): Heading[] => {
//   if (acc.length === 0) {
//     return [
//       {
//         depth: b.depth,
//         value: b.value
//       }
//     ]
//   }
//   const previous = acc[acc.length - 1]
//   if (previous.depth === b.depth) {
//     return [
//       ...acc,
//       {
//         depth: b.depth,
//         value: b.value
//       }
//     ]
//   }
//   const last = acc[acc.length - 1]
//   last.headings = toEmbeddedList(last.headings || [], b, idx)
//   return acc
// }

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
  <nav className="table-content" aria-label="Text navigation">
    <ul>{items.map(toListItem)}</ul>
  </nav>
)
