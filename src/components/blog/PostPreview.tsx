import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Card, Button } from 'react-bootstrap'
import { PostTimeInfo } from './PostTimeInfo'
import { Tags } from './Tags'

import './PostPreview.scss'

export interface PostNode {
  fields?: {
    slug?: string
  }
  frontmatter: {
    date?: string
    dateString?: string
    title?: string
    description?: string
    tags?: string[]
    image?: {
      childImageSharp?: {
        fluid?: GatsbyTypes.GatsbyImageSharpFluidFragment
      }
    }
  }
  timeToRead?: number
  excerpt?: string
}

export interface PostPreviewProps {
  post: PostNode
}

export const PostPreview = ({ post }: PostPreviewProps) => {
  if (!post) {
    throw new Error('PostPreview: cannot render post preview for undefined post')
  }
  if (!post.frontmatter?.date || !post.timeToRead) {
    throw new Error('PostPreview: cannot render post preview for without date and timeToRead')
  }
  return (
    <Card className="post-preview">
      <Link to={post.fields?.slug || '#'} className="stretched-link sr-only sr-only-focusable">
        Read
      </Link>
      {post.frontmatter?.image?.childImageSharp?.fluid && (
        <div className="position-relative">
          <Card.Img
            variant="top"
            fluid={post.frontmatter.image.childImageSharp.fluid}
            style={{ height: '225px' }}
            alt={`${post.frontmatter?.title} image`}
            as={Img}
          />
          <Card.ImgOverlay className="post-preview-overlay text-white">
            <Card.Title className="m-0" as="h3">
              {post.frontmatter.title}
            </Card.Title>
            <Button className="ml-auto" variant="secondary" to={post.fields?.slug || '#'} as={Link}>
              Read
            </Button>
          </Card.ImgOverlay>
        </div>
      )}
      <Card.Body>
        <PostTimeInfo
          date={post.frontmatter.date}
          dateString={post.frontmatter.dateString}
          timeToRead={post.timeToRead}
        />
        <Card.Text>{post.frontmatter.description || post.excerpt}</Card.Text>
        {post.frontmatter?.tags && <Tags values={post.frontmatter.tags} />}
      </Card.Body>
    </Card>
  )
}
