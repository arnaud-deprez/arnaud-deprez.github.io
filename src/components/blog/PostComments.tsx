import React from 'react'
import { useInView } from 'react-intersection-observer'
import useSiteMetadata from '../../hooks/useSiteMetadata'
import { DiscussionEmbed } from 'disqus-react'

export interface CommentsProps {
  title: string
  slug: string
}

export const PostComments = ({ title, slug }: CommentsProps): JSX.Element => {
  const [ref] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  })

  const { siteUrl, disqusShortName } = useSiteMetadata()
  if (!disqusShortName) {
    return <></>
  }
  const url = siteUrl + slug
  const disqusConfig = {
    url,
    identifier: slug,
    title,
  }
  return (
    <div ref={ref} className="disqus">
      <DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
    </div>
  )
}
