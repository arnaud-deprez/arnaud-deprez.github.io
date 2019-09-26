import React from 'react'
import { Card } from 'react-bootstrap'

export interface PhotoCardProps extends React.ComponentPropsWithoutRef<'div'> {
  name: string
  jobTitle: string
  // TODO: photoUrl?: string
}

export const PhotoCard = ({ name, jobTitle, ...rest }: PhotoCardProps) => (
  <Card {...rest}>
    <Card.Img
      className="rounded-circle mb-2 bg-secondary"
      style={{ height: '10rem', width: '10rem' }}
    />
    <Card.Body>
      <Card.Title className="text-center" as="h5">
        {name}
      </Card.Title>
      <Card.Subtitle className="font-italic text-muted text-center text-wrap" as="h6">
        {jobTitle}
      </Card.Subtitle>
    </Card.Body>
  </Card>
)
