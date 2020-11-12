import React from 'react'
import loadable from '@loadable/component'
import useSiteMetadata from '../../hooks/UseSiteMetadata'

// because loadbable currently only support default export: https://reactjs.org/docs/code-splitting.html#named-exports
const DiscussionEmbed = loadable(() => import('./DisqusDiscussionEmbedDefaultExport'))

export interface CommentsProps {
  title: string
  slug: string
}

export const PostComments = ({ title, slug }: CommentsProps): JSX.Element => {
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
  return <DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
}
