import React from 'react'
import { Link } from 'gatsby'
import { Badge, BadgeProps } from 'react-bootstrap'
import { kebabCase } from 'lodash'

import './Tag.scss'

export interface TagProps extends BadgeProps {
  value: string
}

export const Tag = ({ value, variant = 'secondary', ...rest }: TagProps) => (
  <Badge
    {...{ variant, to: `/blog/tags/${kebabCase(value)}`, className: 'tag', ...rest }}
    as={Link}
  >
    {value}
  </Badge>
)

export interface TagListProps {
  values: string[]
}
export const Tags = ({ values }: TagListProps) => (
  <div className="tags">
    {values.map((value) => (
      <Tag key={value} value={value} />
    ))}
  </div>
)
