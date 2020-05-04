import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Col, Card, CardGroup, Nav as BootstrapNav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Link as ScrollSpyLink } from 'react-scroll'
import { MainLayout as Layout } from '../.'
import { Seo, Author } from '../../metadata'
import { Nav, NavSocialIcons } from '../../nav'
import { PhotoCard } from '../../photocard/PhotoCard'
import { TechnicalSkills } from '../../about'
import { LabelledIcon, OriginalIcon } from '../../icon'

import './IndexPageLayout.scss'

interface AboutSection {
  title?: string
  subTitle?: string
  services?: {
    title?: string
    icon?: IconProp
    description?: string
  }[]
  pitch?: string
}

interface AboutSectionProps extends AboutSection {
  author?: Author
}

const AboutSection = (props: AboutSectionProps) => (
  <section id="about-section" className="resume">
    <PhotoCard className="d-lg-none" />

    <h1 className="text-uppercase mb-0" dangerouslySetInnerHTML={{ __html: props.title || '' }} />
    <h2 className="text-muted h4 mt-0">{props.subTitle}</h2>

    <h3 className="text-primary">Helps customers in</h3>

    <CardGroup className="mb-4">
      {props.services?.map((service) => (
        <Col sm={12} md={6} lg={3} className="px-0" key={service?.title}>
          <Card className="border-0 mb-3">
            {service?.icon && (
              <div className="text-center text-3x text-secondary">
                <FontAwesomeIcon icon={service.icon as IconProp} />
              </div>
            )}
            <Card.Body className="pt-0">
              <Card.Title className="text-center" as="h5">
                {service?.title}
              </Card.Title>
              <Card.Text
                className="text-justify"
                dangerouslySetInnerHTML={{ __html: service?.description || '' }}
              />
            </Card.Body>
          </Card>
        </Col>
      ))}
    </CardGroup>

    <blockquote className="container mb-4">
      <p className="text-justify">
        <span className="text-secondary h4 mr-3">
          <FontAwesomeIcon icon="quote-left" />
        </span>
        <em dangerouslySetInnerHTML={{ __html: props.pitch || '' }} />
        <span className="text-secondary h4 ml-3">
          <FontAwesomeIcon icon="quote-right" />
        </span>
      </p>
    </blockquote>

    <h5 className="text-center">Follow me</h5>

    <NavSocialIcons
      useOriginalColor
      github={props.author?.github}
      linkedin={props.author?.linkedin}
      twitter={props.author?.twitter}
      rss={true}
      className="h3 justify-content-center mt-0"
      role="list"
    />
  </section>
)

interface SkillSet {
  title?: string
  values?: string[]
}

interface TechnicalSkillsSection {
  programming?: SkillSet[]
  devOps?: SkillSet[]
  love?: SkillSet[]
}

const TechnicalSkillsSection = (props: TechnicalSkillsSection) => (
  <section id="technical-skills-section" className="resume">
    <h2 className="text-primary text-uppercase">Technical Skills</h2>
    <h3>
      <FontAwesomeIcon icon="laptop-code" className="text-secondary" /> Programming
    </h3>
    <Container className="mb-4" fluid>
      {Object.entries(props?.programming || {}).map(
        ([key, value]) =>
          value?.title &&
          value?.values &&
          value.values.length > 1 && (
            <TechnicalSkills key={key} title={value.title} skills={value.values as string[]} />
          )
      )}
    </Container>

    <h3>
      <FontAwesomeIcon icon="space-shuttle" className="text-secondary" /> DevOps
    </h3>
    <Container className="mb-4" fluid>
      {Object.entries(props?.devOps || {}).map(
        ([key, value]) =>
          value?.title &&
          value?.values &&
          value.values.length > 1 && (
            <TechnicalSkills key={key} title={value?.title} skills={value.values as string[]} />
          )
      )}
    </Container>

    <h3>
      <FontAwesomeIcon icon="heart" className="text-secondary" /> Stack
    </h3>
    <Container className="mb-4" fluid>
      <table>
        <tbody>
          {props.love?.map((love) => {
            if (love) {
              return (
                <tr key={love.title}>
                  <th className="pr-4">{love.title}</th>
                  <td className="d-flex justify-content-center align-items-center py-2">
                    {love.values?.map((v, idx, arr) => {
                      const el = v && (
                        <LabelledIcon label={v} labelClassName="font-weight-light">
                          <OriginalIcon className="text-2x" icon={v} />
                        </LabelledIcon>
                      )
                      if (el && arr.length > 1 && idx < arr.length - 1) {
                        return (
                          <div key={idx} className="d-flex">
                            {el}
                            <span key={idx} className="text-2x mx-2">
                              {' '}
                              +{' '}
                            </span>
                          </div>
                        )
                      }
                      return <div key={idx}>{el}</div>
                    })}
                  </td>
                </tr>
              )
            }
          })}
        </tbody>
      </table>
    </Container>
  </section>
)

type Link = {
  id: string
  title: string
}

const leftMenuItems: Link[] = [
  {
    id: 'about-section',
    title: 'About',
  },
  {
    id: 'technical-skills-section',
    title: 'Technical Skills',
  },
]

const renderLeftMenu = (links: Link[]) => () => (
  <Nav className="flex-column align-items-center" as="ul">
    {links.map((link) => (
      <BootstrapNav.Link
        activeClass="active"
        to={link.id}
        spy={true}
        smooth={true}
        duration={200}
        as={ScrollSpyLink}
        key={link.id}
      >
        {link.title}
      </BootstrapNav.Link>
    ))}
  </Nav>
)

interface Frontmatter {
  title?: string
  section?: {
    about?: AboutSection
    technicalSkills?: {}
  }
}

export interface IndexPageProps {
  pageContext: {
    frontmatter?: Frontmatter
  }
}

const IndexPageLayout = ({ pageContext }: IndexPageProps) => {
  const { siteInfo } = useStaticQuery<GatsbyTypes.IndexPageLayoutQuery>(
    graphql`
      query IndexPageLayout {
        siteInfo: site {
          ...SiteInformation
        }
      }
    `
  )
  if (!siteInfo?.siteMetadata) {
    throw new Error('IndexPageLayout: siteMetadata is undefined')
  }
  const { frontmatter } = pageContext
  if (!frontmatter || !frontmatter?.section) {
    throw new Error('IndexPageLayout: frontmatter.section is undefined')
  }
  return (
    <Layout siteMetadata={siteInfo?.siteMetadata} renderLeftMenu={renderLeftMenu(leftMenuItems)}>
      <Seo site={siteInfo} />
      <main>
        {frontmatter.section?.about && (
          <>
            <AboutSection author={siteInfo?.siteMetadata?.author} {...frontmatter.section.about} />
            <hr />
          </>
        )}
        {frontmatter.section?.technicalSkills && (
          <TechnicalSkillsSection {...frontmatter.section.technicalSkills} />
        )}
      </main>
    </Layout>
  )
}

export default IndexPageLayout
