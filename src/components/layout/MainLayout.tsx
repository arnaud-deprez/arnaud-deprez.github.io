import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { NavbarLeft } from '../nav'
import { Layout, LayoutProps } from '.'

import './MainLayout.scss'

export interface MainLayoutProps extends LayoutProps {
  renderLeftMenu?: () => React.ReactNode | React.ReactNode[]
  readonly children?: React.ReactNode | React.ReactNode[]
}

export const MainLayout = ({
  renderLeftMenu = () => null,
  children,
  siteMetadata,
  ...rest
}: MainLayoutProps) => (
  <Layout {...{ siteMetadata, ...rest }}>
    <Container fluid>
      <Row>
        <Col lg={2} className="d-none d-lg-block" as="aside">
          <NavbarLeft author={siteMetadata.author}>{renderLeftMenu()}</NavbarLeft>
        </Col>
        <Col className="min-h-100vh">{children}</Col>
      </Row>
    </Container>
  </Layout>
)
