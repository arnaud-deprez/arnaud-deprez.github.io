import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
  FacebookShareButton,
} from 'react-share'

import { Nav } from './Nav'

import './ShareMenu.scss'

export interface ShareMenuProps extends JSX.IntrinsicAttributes {
  url: string
  title?: string
  tags: string[] | undefined
  description?: string
  buttonClassName?: string
}

export const ShareMenu = ({
  url,
  title,
  tags,
  description,
  buttonClassName = 'btn-bg-dark',
  ...rest
}: ShareMenuProps) => {
  const btnClassName = `icon-round-wrapper btn ${buttonClassName}`.trim()
  return (
    <Nav {...rest} className="share-menu" as="ul">
      <TwitterShareButton
        title={title}
        hashtags={tags}
        url={url}
        resetButtonStyle={false}
        className={btnClassName}
      >
        <FontAwesomeIcon icon={['fab', 'twitter']} inverse />
      </TwitterShareButton>
      <LinkedinShareButton
        title={title}
        summary={description}
        url={url}
        resetButtonStyle={false}
        className={btnClassName}
      >
        <FontAwesomeIcon icon={['fab', 'linkedin-in']} inverse />
      </LinkedinShareButton>
      <RedditShareButton title={title} url={url} resetButtonStyle={false} className={btnClassName}>
        <FontAwesomeIcon icon={['fab', 'reddit-alien']} inverse />
      </RedditShareButton>
      <FacebookShareButton
        quote={title}
        hashtag={tags?.join(' ')}
        url={url}
        resetButtonStyle={false}
        className={btnClassName}
      >
        <FontAwesomeIcon icon={['fab', 'facebook-f']} inverse />
      </FacebookShareButton>
    </Nav>
  )
}
