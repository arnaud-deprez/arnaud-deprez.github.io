import React from 'react'
import clsx from 'clsx'

import './Blockquote.scss'

export interface BlockquoteProps {
  children: React.ReactNode
  url: string
  author?: string
  title?: string
}

const SimpleBlockquote = ({ children, url, root = true }) => (
  <blockquote className={clsx({ 'blog-blockquote': root }, 'blockquote')} cite={url}>
    {children}
  </blockquote>
)

const AttributionBlockquote = ({ children, url, author = '', title = undefined }) => (
  <figure className="blog-blockquote">
    <SimpleBlockquote root={false} url={url}>
      {children}
    </SimpleBlockquote>
    <figcaption className="blockquote-footer">
      {author}
      {!!title && (
        <>
          {' '}
          in <cite title={title}>{title}</cite>
        </>
      )}
    </figcaption>
  </figure>
)

export const Blockquote = (props: BlockquoteProps) => {
  if (props.author) {
    return <AttributionBlockquote {...props} />
  }
  return <SimpleBlockquote {...props} />
}

export default Blockquote
