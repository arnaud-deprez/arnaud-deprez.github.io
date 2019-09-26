import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => (
  <Container fluid as="footer">
    <Row className="justify-content-around text-center">
      <Col sm={12} lg={3}>
        <p>Copyright © 2019 Arnaud Deprez</p>
      </Col>
      <Col sm={12} lg={3}>
        <p>
          Build with <a href="https://www.gatsbyjs.org">Gatsby</a> | Designed with{' '}
          <a href="https://getbootstrap.com">Bootstrap</a> | Hosted with{' '}
          <FontAwesomeIcon color="red" icon="heart" /> by{' '}
          <a href="https://www.netlify.com/">Netlify</a>
        </p>
      </Col>
    </Row>
  </Container>
)
