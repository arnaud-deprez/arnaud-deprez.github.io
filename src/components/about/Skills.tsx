import React from 'react'
import * as _ from 'lodash'
import { Card } from 'react-bootstrap'
import { LabelledIcon, OriginalIcon } from '../icon'

import './Skills.scss'

const mapToListItem = (item: string) => (
  <li className="p-2" key={item}>
    <LabelledIcon label={item} labelAs="strong">
      <OriginalIcon className="text-2x" icon={item} />
    </LabelledIcon>
  </li>
)

const mapToList = (items: string[]) => <ul className="skills">{items.map(mapToListItem)}</ul>

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

export interface TechnicalSkillsProps {
  title: string
  skills: string[] | string[][]
}

export const TechnicalSkills = ({ title, skills }: TechnicalSkillsProps) => (
  <Card className="skills-set bg-light mb-1">
    <Card.Body>
      <Card.Title as="h5">{title}</Card.Title>
      {uniformize(skills).map(mapToList)}
    </Card.Body>
  </Card>
)
