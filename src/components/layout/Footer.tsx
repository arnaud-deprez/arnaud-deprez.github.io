import React from 'react'
import { Link } from 'gatsby'
import { Container, Col, Row, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { OriginalIcon } from '../icon'

import './Footer.scss'

export interface FooterProps {
  readonly copyright?: string
}

export const Footer = ({ copyright }: FooterProps) => (
  <Container fluid as="footer">
    <hr />
    <Row className="justify-content-around">
      <Col sm={12} lg={{ span: 3 }} className="footer-text">
        {copyright && (
          <>
            <p>{copyright}</p>
            <p>
              <Link to="/legal/">Legal Notice</Link> | <Link to="/legal/#terms-of-use">Terms</Link>{' '}
              | <Link to="/legal/#powple-sprl-privacy-policy">Privacy policy</Link>
            </p>
          </>
        )}
      </Col>
      <Col sm={12} lg={3} className="footer-text">
        <p>
          Build with{' '}
          <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">
            <OverlayTrigger placement="top" overlay={<Tooltip id="footer-gatsby">Gatsby</Tooltip>}>
              <OriginalIcon icon="gatsby" inline />
            </OverlayTrigger>
            <span className="sr-only">Gatsby</span>
          </a>
          {' | '}
          Designed with{' '}
          <a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="footer-gatsby">Bootstrap</Tooltip>}
            >
              <OriginalIcon icon="bootstrap" inline />
            </OverlayTrigger>
            <span className="sr-only">Bootstrap</span>
          </a>
        </p>
        <p>
          Hosted with <FontAwesomeIcon icon="heart" color="red" /> by{' '}
          <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
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
