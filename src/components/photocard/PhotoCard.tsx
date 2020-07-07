import React from 'react'
import { Card } from 'react-bootstrap'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import './PhotoCard.scss'

export interface PhotoCardProps extends React.ComponentPropsWithoutRef<'div'> {
  name?: string
  jobTitle?: string
  className?: string
  // eslint-disable-next-line camelcase
  img?: GatsbyTypes.GatsbyImageSharpFixed_withWebpFragment
}

export const PurePhotoCard = ({
  name,
  jobTitle,
  className,
  img,
  ...rest
}: PhotoCardProps & { imgSrc?: string }): JSX.Element => (
  <Card className={`photo-card ${className || ''}`.trim()} {...rest}>
    {img && <Card.Img fixed={img} alt="profile" className="rounded-circle mb-2" as={Img} />}
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
          fixed(width: 160, height: 160) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  return <PurePhotoCard {...props} img={data?.file?.childImageSharp?.fixed} />
}

export default PhotoCard
