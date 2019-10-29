import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { OriginalIcon } from '../icon'

export const Footer = () => (
  <Container fluid as="footer">
    <hr />
    <Row className="justify-content-around text-center">
      <Col sm={12} lg={{ span: 3, offset: 2 }}>
        <p>Copyright © 2019 Arnaud Deprez</p>
      </Col>
      <Col sm={12} lg={3}>
        <p>
          Build with{' '}
          <a href="https://www.gatsbyjs.org">
            <OriginalIcon icon="gatsby" inline />
          </a>{' '}
          | Designed with{' '}
          <a href="https://getbootstrap.com">
            <OriginalIcon icon="bootstrap" inline />
          </a>{' '}
          | Hosted with <FontAwesomeIcon icon="heart" color="red" /> by{' '}
          <a href="https://www.netlify.com/">
            <OriginalIcon icon="netlify" inline />
          </a>
        </p>
      </Col>
    </Row>
  </Container>
)
