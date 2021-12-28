import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { NavbarLeft } from '../nav'
import { ContentLayout, ContentLayoutProps } from './VerticalLayout'

import './MainLayout.scss'
import useSiteMetadata from '../../hooks/useSiteMetadata'

export interface MainLayoutProps extends ContentLayoutProps {
  renderLeftMenu?: () => React.ReactNode | React.ReactNode[]
  readonly children?: React.ReactNode | React.ReactNode[]
}

export const MainLayout = ({
  renderLeftMenu = () => null,
  children,
  siteMetadata: siteMetadataArg,
  ...rest
}: MainLayoutProps): JSX.Element => {
  const siteMetadata = siteMetadataArg || useSiteMetadata()
  return (
    <Container fluid className="main-layout">
      <Row>
        <Col className="navbar-left-wrapper" as="aside">
          <NavbarLeft author={siteMetadata?.author}>{renderLeftMenu()}</NavbarLeft>
        </Col>
        <Col className="main-content-wrapper">
          <ContentLayout {...{ siteMetadata, ...rest }}>{children}</ContentLayout>
        </Col>
      </Row>
    </Container>
  )
}
