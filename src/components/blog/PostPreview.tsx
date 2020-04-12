import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Card, Button } from 'react-bootstrap'

export interface PostNode {
  fields?: {
    slug?: string
  }
  frontmatter: {
    date?: Date
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
  return (
    <Card className="mb-2">
      <Link to={post.fields?.slug || '#'} className="stretched-link" />
      {/* <Link to={post.fields.slug}> */}
      {post.frontmatter?.image?.childImageSharp?.fluid && (
        <div className="position-relative">
          <Card.Img
            variant="top"
            fluid={post.frontmatter.image.childImageSharp.fluid}
            style={{ height: '225px' }}
            alt={`${post.frontmatter?.title} image`}
            as={Img}
          />
          <Card.ImgOverlay
            className="text-white d-flex align-items-center"
            style={{
              top: 'auto',
              bottom: '0',
              backgroundColor: 'rgba(0,0,0,0.54)',
            }}
          >
            <Card.Title className="m-0" as="h3">
              {post.frontmatter.title}
            </Card.Title>
            <Button
              className="ml-auto"
              variant="secondary"
              style={{ zIndex: 2 }}
              to={post.fields?.slug || '#'}
              as={Link}
            >
              Read
            </Button>
          </Card.ImgOverlay>
        </div>
      )}
      <Card.Body>
        {post.frontmatter.image ? '' : <Card.Title as="h3">{post.frontmatter.title}</Card.Title>}
        <Card.Subtitle as="h4">Last update on {post.frontmatter.date}</Card.Subtitle>
        <Card.Subtitle as="h5">{post.timeToRead} min read</Card.Subtitle>
        <Card.Text>{post.frontmatter.description || post.excerpt}</Card.Text>
      </Card.Body>
      {/* </Link> */}
    </Card>
  )
}
