import React from 'react'
import { Container, Col, Row, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { OriginalIcon } from '../icon'

import './Footer.scss'

export const Footer = () => (
  <Container fluid as="footer">
    <hr />
    <Row className="justify-content-around">
      <Col sm={12} lg={{ span: 3, offset: 2 }} className="footer-text">
        <p>© 2019 Arnaud Deprez</p>
        <address>
          Owner of
          <br />
          <b>Powple SPRL</b>
          <br />
          Rue des Rivageois 7/21 - 4000 Liège
          <br />
          Belgium
          <br />
          Phone: <a href="tel:+3242531491">+32 4 253 14 91</a>
          <br />
          Email: <a href="mailto:info@powple.com">info@powple.com</a>
          <br />
          VAT: BE 0669.706.806
        </address>
      </Col>
      <Col sm={12} lg={3} className="footer-text">
        <p>
          Build with{' '}
          <a href="https://www.gatsbyjs.org">
            <OverlayTrigger placement="top" overlay={<Tooltip id="footer-gatsby">Gatsby</Tooltip>}>
              <OriginalIcon icon="gatsby" inline />
            </OverlayTrigger>
            <span className="sr-only">Gatsby</span>
          </a>
          {' | '}
          Designed with{' '}
          <a href="https://getbootstrap.com">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="footer-gatsby">Bootstrap</Tooltip>}
            >
              <OriginalIcon icon="bootstrap" inline />
            </OverlayTrigger>
            <span className="sr-only">Bootstrap</span>
          </a>
          {' | '}
          Hosted with <FontAwesomeIcon icon="heart" color="red" /> by{' '}
          <a href="https://www.netlify.com/">
            <OverlayTrigger placement="top" overlay={<Tooltip id="footer-gatsby">Netlify</Tooltip>}>
              <OriginalIcon icon="netlify" inline />
            </OverlayTrigger>
            <span className="sr-only">Netlify</span>
          </a>
        </p>
      </Col>
    </Row>
  </Container>
)
