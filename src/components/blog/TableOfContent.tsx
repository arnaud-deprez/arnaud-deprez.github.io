import React from 'react'
import * as _ from 'lodash'

export interface Heading {
  value: string
  depth: number
  headings?: Heading[]
}

const findLastItem = (depth: number, arr?: Heading[]): Heading | undefined => {
  if (!arr) {
    return undefined
  }
  return (
    _.findLast(arr, v => v.depth === depth) || findLastItem(depth, arr[arr.length - 1].headings)
  )
}

const toEmbeddedList = (acc: Heading[], b: Heading, idx: number): Heading[] => {
  if (acc.length === 0) {
    return [b]
  }
  const previous = acc[acc.length - 1]
  if (previous.depth === b.depth) {
    return [...acc, b]
  }
  if (previous.depth > b.depth) {
    acc[idx - 1].headings = [b]
    return acc
  }
  const heading = findLastItem(b.depth - 1, acc)
  if (heading) {
    heading.headings = heading.headings || []
    heading.headings = [...heading.headings, b]
  }
  return acc
}

const toListItem = (heading: Heading) => (
  <React.Fragment key={_.kebabCase(heading.value)}>
    <li>
      <a href={`#${heading.value}`}>{heading.value}</a>
    </li>
    {heading.headings && (
      <ul key={_.kebabCase(`heading-${heading.value}`)}>{heading.headings.map(toListItem)}</ul>
    )}
  </React.Fragment>
)

export interface TableOfContentProps {
  headings: Heading[]
}

export const TableOfContent = ({ headings }: TableOfContentProps) => (
  <nav className="table-content" aria-label="Text navigation">
    <mark>Table of content...</mark>
    <ul>{headings.reduce(toEmbeddedList, []).map(toListItem)}</ul>
  </nav>
)
