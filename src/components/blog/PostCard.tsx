import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Container, Figure } from 'react-bootstrap'
import { ShareMenu } from '../nav'
import { Tags, PostTimeInfo, PostComments } from '.'

import './PostCard.scss'

interface BlogPostTitleImage {
  title: string
  image: GatsbyTypes.MdxFrontmatterImage
}

const BlogPostTitleImage = ({ title, image }: BlogPostTitleImage) => (
  <Figure className="blog-title-image">
    <GatsbyImage
      image={image.src?.childImageSharp?.gatsbyImageData}
      className="figure-img rounded mx-auto"
      imgClassName="img-fluid"
      alt={title}
    />
    {image?.caption && (
      <Figure.Caption className="text-center" dangerouslySetInnerHTML={{ __html: image.caption }} />
    )}
  </Figure>
)

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
    <Container className="post-card" fluid as={as}>
      {post.frontmatter?.image && (
        <BlogPostTitleImage title={title} image={post.frontmatter.image} />
      )}
      <article>
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
        <PostComments {...{ title, slug }} />
      </article>
    </Container>
  )
}
