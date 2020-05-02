import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './PostTimeInfo.scss'

export interface PostTimeInfoProps {
  date: string
  dateString?: string
  timeToRead: number
}

export const PostTimeInfo = ({ date, dateString, timeToRead }: PostTimeInfoProps) => (
  <div className="post-time-info with-icon">
    <span className="text-warning text-2x mr-3">
      <FontAwesomeIcon icon="calendar-alt" />
    </span>
    <div>
      <p className="mb-0 font-weight-bolder">
        Last update on <time dateTime={date}>{dateString || date}</time>
      </p>
      <p className="mb-0 text-muted">{timeToRead} min read</p>
    </div>
  </div>
)
