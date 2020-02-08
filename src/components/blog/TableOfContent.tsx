import React from 'react'
import * as _ from 'lodash'

interface Heading {
  value: string
  depth: number
}

// TODO: fix this algorithm
const toListItem = (level: number, array: Heading[]) => {
  const result = new Array<JSX.Element>()
  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    if (item.depth === level) {
      result.push(
        <li key={_.kebabCase(item.value)}>
          <a href={`#${_.kebabCase(item.value)}`}>{item.value}</a>
        </li>
      )
    } else if (item.depth > level) {
      result.push(<ul key={item.depth}>{toListItem(item.depth, array.slice(i))}</ul>)
    }
  }
  return result
}

export interface TableOfContentProps {
  headings: Heading[]
}

export const TableOfContent = ({ headings }: TableOfContentProps) => (
  <nav className="table-content" aria-label="Text navigation">
    <mark>Table of content...</mark>
    <ul>{toListItem(2, headings)}</ul>
  </nav>
)
