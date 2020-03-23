import React from 'react'
import { Link } from 'gatsby'
import { Card, CardImg } from 'react-bootstrap'

export interface PostNode {
  fields: {
    slug: string
  }
  frontmatter: {
    date: Date
    title: string
    description: string
    tags: string[]
    image: string
  }
  timeToRead: number
  excerpt: string
}

export interface PostSummaryProps {
  post: PostNode
}

export const PostSummary = ({ post }: PostSummaryProps) => (
  <Link to={post.fields.slug}>
    <Card>
      <Card.Title>{post.frontmatter.title}</Card.Title>
      <Card.Body>{post.excerpt}</Card.Body>
    </Card>
  </Link>
)
