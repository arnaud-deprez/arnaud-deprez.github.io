import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { NavbarLeft } from '../nav'
import { ContentLayout, ContentLayoutProps } from './ContentLayout'

import './MainLayout.scss'

export interface MainLayoutProps extends ContentLayoutProps {
  renderLeftMenu?: () => React.ReactNode | React.ReactNode[]
  readonly children?: React.ReactNode | React.ReactNode[]
}

export const MainLayout = ({
  renderLeftMenu = () => null,
  children,
  siteMetadata,
  ...rest
}: MainLayoutProps) => (
  <Container fluid className="main-layout">
    <Row>
      <Col lg={2} className="d-none d-lg-block navbar-left-wrapper" as="aside">
        <NavbarLeft author={siteMetadata?.author}>{renderLeftMenu()}</NavbarLeft>
      </Col>
      <Col>
        <ContentLayout {...{ siteMetadata, ...rest }}>{children}</ContentLayout>
      </Col>
    </Row>
  </Container>
)
