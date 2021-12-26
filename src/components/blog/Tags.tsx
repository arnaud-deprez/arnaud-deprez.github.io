import React from 'react'
import { Link } from 'gatsby'
import { Badge, BadgeProps } from 'react-bootstrap'
import { kebabCase } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Tag.scss'

interface TagProps extends BadgeProps {
  value: string
}

const Tag = ({ value, bg = 'secondary', ...rest }: TagProps) => (
  <Badge
    {...{ bg, to: `/blog/tags/${kebabCase(value)}/`, className: 'tag', ...rest }}
    as={Link}
  >
    <FontAwesomeIcon icon="tag" className="me-1" />
    {value}
  </Badge>
)

export interface TagListProps {
  values: string[]
}
export const Tags = ({ values }: TagListProps): JSX.Element => (
  <div className="tags">
    {values.map((value) => (
      <Tag key={value} value={value} />
    ))}
  </div>
)
