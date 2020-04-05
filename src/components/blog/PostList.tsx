import React from 'react'
import { PostNode, PostPreview } from './PostPreview'

export interface PostListProps {
  posts: PostNode[]
}

export const PostList = ({ posts }: PostListProps) => (
  <ul className="list-unstyled">
    {posts.map(p => (
      <li key={p.fields?.slug}>
        <PostPreview post={p} />
      </li>
    ))}
  </ul>
)
