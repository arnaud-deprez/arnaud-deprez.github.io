import React from 'react'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Container } from 'react-bootstrap'
import { ShareMenu } from '../nav'
import { Tags, PostTimeInfo, Comments } from '.'

export interface PostCardProps extends GatsbyTypes.BlogPostPageQuery {
  slug: string
  as?: React.ElementType
}

export const PostCard = ({ site, mdx: post, slug, as = 'div' }: PostCardProps): JSX.Element => {
  if (!post) {
    throw new Error('BlogPostPage: post is required')
  }
  if (!post.timeToRead) {
    throw new Error('BlogPostPage: post.timeToRead is required')
  }
  if (!post.frontmatter?.date) {
    throw new Error('BlogPostPage: post.frontmatter.date is required')
  }

  const url = site?.siteMetadata?.siteUrl + slug
  const title = post.frontmatter?.title
  const tags = post.frontmatter?.tags
  const description = post.frontmatter?.description || post.excerpt

  return (
    <Container fluid as={as}>
      {post.frontmatter?.image && (
        <Img
          fluid={post.frontmatter.image?.childImageSharp?.fluid}
          className="blog-title-image"
          imgStyle={{ objectFit: 'contain' }}
          alt={`${post.frontmatter.title}`}
        />
      )}
      <h1>{post.frontmatter?.title}</h1>
      <PostTimeInfo
        date={post.frontmatter.date}
        dateString={post.frontmatter?.dateString}
        timeToRead={post.timeToRead}
      />
      {post.frontmatter?.tags && <Tags values={post.frontmatter.tags as string[]} />}
      <ShareMenu {...{ id: 'share-menu-top', url, title, tags, description }} />
      {post.body && (
        <section className="text-justify">
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
      )}
      <ShareMenu {...{ id: 'share-menu-bottom', url, title, tags, description }} />
      <Comments {...{ title, slug }} />
    </Container>
  )
}
