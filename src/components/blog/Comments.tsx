import React from 'react'
import { DiscussionEmbed } from 'disqus-react'
import useSiteMetadata from '../../hooks/UseSiteMetadata'

export interface CommentsProps {
  title: string
  slug: string
}

export const Comments = ({ title, slug }: CommentsProps) => {
  const { siteUrl, disqusShortName } = useSiteMetadata()
  const url = siteUrl + slug
  // remove first and last /
  const identifier = slug.substring(1, slug.length - 1).replace(/\//g, '-')
  const disqusConfig = {
    url,
    identifier,
    title,
  }
  return <DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
}
