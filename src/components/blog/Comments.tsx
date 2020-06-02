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
  const disqusConfig = {
    url,
    identifier: slug,
    title,
  }
  return <DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
}
