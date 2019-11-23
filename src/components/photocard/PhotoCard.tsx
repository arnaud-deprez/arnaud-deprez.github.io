import React from 'react'
import { Card } from 'react-bootstrap'

import pic from '../../../static/favicon/profile.png'
import './PhotoCard.scss'

export interface PhotoCardProps extends React.ComponentPropsWithoutRef<'div'> {
  name?: string
  jobTitle?: string
  className?: string
}

export const PhotoCard = ({ name, jobTitle, className, ...rest }: PhotoCardProps) => (
  <Card className={`photo-card ${className || ''}`.trim()} {...rest}>
    <Card.Img src={pic} alt="profile" className="rounded-circle mb-2" />
    <Card.Body className="d-none d-lg-block">
      {name && (
        <Card.Title className="text-center" as="h5">
          {name}
        </Card.Title>
      )}
      {jobTitle && (
        <Card.Subtitle className="font-italic text-center text-wrap" as="h6">
          {jobTitle}
        </Card.Subtitle>
      )}
    </Card.Body>
  </Card>
)
