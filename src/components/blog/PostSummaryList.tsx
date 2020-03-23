import React from 'react'
import { PostNode, PostSummary } from './PostSummary'

export interface PostSummaryListProps {
  posts: PostNode[]
}

export const PostSummaryList = ({ posts }: PostSummaryListProps) => (
  <ol>
    {posts.map(p => (
      <li key={p.fields.slug}>
        <PostSummary post={p} />
      </li>
    ))}
  </ol>
)
