import React from 'react'
import { Container, Col, Row, OverlayTrigger, Tooltip } from 'react-bootstrap'
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
            <OverlayTrigger placement="top" overlay={<Tooltip id="footer-gatsby">Gatsby</Tooltip>}>
              <OriginalIcon icon="gatsby" inline />
            </OverlayTrigger>
          </a>{' '}
          | Designed with{' '}
          <a href="https://getbootstrap.com">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="footer-gatsby">Bootstrap</Tooltip>}
            >
              <OriginalIcon icon="bootstrap" inline />
            </OverlayTrigger>
          </a>{' '}
          | Hosted with <FontAwesomeIcon icon="heart" color="red" /> by{' '}
          <a href="https://www.netlify.com/">
            <OverlayTrigger placement="top" overlay={<Tooltip id="footer-gatsby">Netlify</Tooltip>}>
              <OriginalIcon icon="netlify" inline />
            </OverlayTrigger>
          </a>
        </p>
      </Col>
    </Row>
  </Container>
)
