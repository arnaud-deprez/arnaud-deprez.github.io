import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './PostTimeInfo.scss'

export interface PostTimeInfoProps extends React.HTMLAttributes<'div'> {
  date: string
  dateString?: string
  timeToRead: number
}

export const PostTimeInfo = ({
  date,
  dateString,
  timeToRead,
  className = '',
}: PostTimeInfoProps): JSX.Element => (
  <div className={`post-time-info ${className}`.trim()}>
    <FontAwesomeIcon icon="calendar-alt" className="text-warning text-2x mr-3" />
    <div>
      <p className="mb-0 font-weight-bolder">
        Last update on <time dateTime={date}>{dateString || date}</time>
      </p>
      <p className="mb-0">{timeToRead} min read</p>
    </div>
  </div>
)
