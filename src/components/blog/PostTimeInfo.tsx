import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './PostTimeInfo.scss'

export interface PostTimeInfoProps {
  date: string
  dateString?: string
  timeToRead: number
}

export const PostTimeInfo = ({ date, dateString, timeToRead }: PostTimeInfoProps) => (
  <div className="post-time-info">
    <FontAwesomeIcon icon="calendar-alt" className="text-2x mr-3" />
    <div>
      <p className="mb-0 font-weight-bolder">
        Last update on <time dateTime={date}>{dateString || date}</time>
      </p>
      <p className="mb-0 text-muted">{timeToRead} min read</p>
    </div>
  </div>
)
