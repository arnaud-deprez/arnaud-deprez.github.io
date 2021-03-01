import React from 'react'
import { Card } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'

import './PhotoCard.scss'

export interface PhotoCardProps extends React.ComponentPropsWithoutRef<'div'> {
  name?: string
  jobTitle?: string
  className?: string
}

export const PhotoCard = ({ name, jobTitle, className, ...rest }: PhotoCardProps): JSX.Element => (
  <Card className={`photo-card ${className || ''}`.trim()} {...rest}>
    <StaticImage
      src="../../images/profile.png"
      alt="profile"
      imgClassName="card-img rounded-circle mb-2"
      width={160}
      height={160}
      placeholder="blurred"
      loading="eager"
    />
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

export default PhotoCard
