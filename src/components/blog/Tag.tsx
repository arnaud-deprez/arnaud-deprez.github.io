import React from 'react'
import { Badge, BadgeProps } from 'react-bootstrap'

export interface TagProps extends BadgeProps {
  value: string
}

export const Tag = ({ value, variant = 'secondary' }: TagProps) => (
  <Badge variant={variant}>{value}</Badge>
)

export interface TagListProps {
  values: string[]
}
export const TagList = ({ values }: TagListProps) => (
  <div className="tag-list">
    {values.map(value => (
      <Tag key={value} value={value} />
    ))}
  </div>
)
