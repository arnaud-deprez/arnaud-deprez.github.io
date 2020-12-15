import React from 'react'
import { isArray } from 'lodash'
import { Card } from 'react-bootstrap'
import loadable from '@loadable/component'
import { useInView } from 'react-intersection-observer'
import { LabelledIcon } from '../icon'

import './TechnicalSkills.scss'

const OriginalIcon = loadable(() => import('../icon/OriginalIcon'))

const TechnicalSkill = ({ skill }: { skill: string }) => {
  const [ref] = useInView({
    triggerOnce: true,
    rootMargin: '80px 0px',
  })
  return (
    <LabelledIcon label={skill} labelAs="strong" ref={ref}>
      <OriginalIcon className="text-2x" icon={skill} />
    </LabelledIcon>
  )
}

const mapToList = (items: string[], idx: number) => (
  <ul className="skills" key={idx}>
    {items.map((item) => (
      <li className="p-2" key={item}>
        <TechnicalSkill skill={item} />
      </li>
    ))}
  </ul>
)

const uniformize = (items: string[] | string[][]): string[][] => {
  const result = []
  let acc = []
  for (const it of items) {
    if (isArray(it)) {
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

export const TechnicalSkills = ({ title, skills }: TechnicalSkillsProps): JSX.Element => (
  <Card className="skills-set bg-light mb-1">
    <Card.Body>
      <Card.Title className="h5">{title}</Card.Title>
      {uniformize(skills).map(mapToList)}
    </Card.Body>
  </Card>
)
