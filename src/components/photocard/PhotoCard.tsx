import React from 'react'
import { Card } from 'react-bootstrap'
import { useStaticQuery, graphql } from 'gatsby'

import './PhotoCard.scss'

export interface PhotoCardProps extends React.ComponentPropsWithoutRef<'div'> {
  name?: string
  jobTitle?: string
  className?: string
}

export const PurePhotoCard = ({
  name,
  jobTitle,
  className,
  imgSrc,
  ...rest
}: PhotoCardProps & { imgSrc?: string }): JSX.Element => (
  <Card className={`photo-card ${className || ''}`.trim()} {...rest}>
    {imgSrc && <Card.Img src={imgSrc} alt="profile" className="rounded-circle mb-2" />}
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

export const PhotoCard = (props: PhotoCardProps): JSX.Element => {
  const data = useStaticQuery<GatsbyTypes.PhotoProfileQuery>(graphql`
    query PhotoProfile {
      file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          resize(width: 160, height: 160) {
            src
          }
        }
      }
    }
  `)
  return <PurePhotoCard {...props} imgSrc={data?.file?.childImageSharp?.resize?.src} />
}

export default PhotoCard
