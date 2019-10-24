import React from 'react'
import * as _ from 'lodash'
import OriginalIcon from '../icon/OriginalIcon'

import './Skills.scss'

const mapToListItem = (item: string) => (
  <li className="p-2" key={item}>
    <div className="d-flex flex-column align-items-center">
      <OriginalIcon className="text-2x" icon={item} />
      <strong>{item}</strong>
    </div>
  </li>
)

const mapToList = (items: string[]) => (
  <ul className="list-unstyled d-flex align-items-end">{items.map(mapToListItem)}</ul>
)

const uniformize = (items: string[] | string[][]): string[][] => {
  const result = []
  let acc = []
  for (const it of items) {
    if (_.isArray(it)) {
      if (acc.length > 0) {
        // store acc and reset it
        result.push(acc)
        acc = []
      }
      result.push(it)
    } else {
      acc.push(it)
    }
  }
  if (acc.length > 0) {
    // store acc and reset it
    result.push(acc)
    acc = []
  }
  return result
}

export interface SkillsProps {
  skills: string[] | string[][]
}

export const Skills = ({ skills }: SkillsProps) => (
  <div className="skills">{uniformize(skills).map(mapToList)}</div>
)
