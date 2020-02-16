import React from 'react'
import * as _ from 'lodash'

export interface Heading {
  value: string
  depth: number
  headings?: Heading[]
}

const toEmbeddedList = (acc: Heading[], b: Heading, idx: number): Heading[] => {
  if (acc.length === 0) {
    return [
      {
        depth: b.depth,
        value: b.value
      }
    ]
  }
  const previous = acc[acc.length - 1]
  if (previous.depth === b.depth) {
    return [
      ...acc,
      {
        depth: b.depth,
        value: b.value
      }
    ]
  }
  const last = acc[acc.length - 1]
  last.headings = toEmbeddedList(last.headings || [], b, idx)
  return acc
}

const toListItem = (heading: Heading) => (
  <React.Fragment key={_.kebabCase(heading.value)}>
    <li>
      <a href={`#${heading.value}`}>{heading.value}</a>
    </li>
    {heading.headings && <ul>{heading.headings.map(toListItem)}</ul>}
  </React.Fragment>
)

export interface TableOfContentProps {
  headings: Heading[]
}

export const TableOfContent = ({ headings }: TableOfContentProps) => (
  <nav className="table-content" aria-label="Text navigation">
    <ul>{headings.reduce(toEmbeddedList, []).map(toListItem)}</ul>
  </nav>
)
