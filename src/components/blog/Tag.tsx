import React from 'react'
import { Link } from 'gatsby'
import { Badge, BadgeProps } from 'react-bootstrap'
import { kebabCase } from 'lodash'

import './Tag.scss'

export interface TagProps extends BadgeProps {
  value: string
}

export const Tag = ({ value, variant = 'secondary', ...rest }: TagProps) => (
  <Link to={`/blog/tags/${kebabCase(value)}`}>
    <Badge {...{ variant, ...rest }}>{value}</Badge>
  </Link>
)

export interface TagListProps {
  values: string[]
}
export const TagList = ({ values }: TagListProps) => (
  <div className="tag-list">
    {values.map(value => (
      <Tag key={value} value={value} className="tag" />
    ))}
  </div>
)
