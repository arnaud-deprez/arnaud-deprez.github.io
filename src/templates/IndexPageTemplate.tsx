import React from 'react'
import { graphql } from 'gatsby'
import { Container, Col, Card, CardGroup, Nav as BootstrapNav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link as ScrollSpyLink } from 'react-scroll'
import { PhotoCard } from '../components/photocard/PhotoCard'
import { MainLayout as Layout } from '../components/layout'
import { Seo, SiteInformation, Author } from '../components/metadata'
import { Nav, NavSocialIcons } from '../components/nav'
import { TechnicalSkills } from '../components/about'
import { LabelledIcon, OriginalIcon } from '../components/icon'

import './IndexPageTemplate.scss'

interface AboutSectionProps {
  author: Author
  title: string
  subTitle: string
  services: {
    icon: string
    title: string
    description: string
  }[]
  pitch: string
}

const AboutSection = (props: AboutSectionProps) => (
  <section id="about" className="resume">
    <PhotoCard className="mb-4 d-lg-none" />

    <h1 className="text-uppercase mb-0" dangerouslySetInnerHTML={{ __html: props.title }} />
    <h2 className="text-muted h4 pt-0 mb-5">{props.subTitle}</h2>

    <h3 className="text-primary mb-4">Helps customers in</h3>

    <CardGroup className="mb-4">
      {props.services.map(service => (
        <Col sm={12} md={6} lg={3} className="px-0" key={service.title}>
          <Card className="border-0 mb-3">
            <div className="text-center text-3x text-secondary">
              <FontAwesomeIcon icon={service.icon} />
            </div>
            <Card.Body className="pt-2">
              <Card.Title className="text-center" as="h5">
                {service.title}
              </Card.Title>
              <Card.Text
                className="text-justify"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
            </Card.Body>
          </Card>
        </Col>
      ))}
    </CardGroup>

    <blockquote className="container mb-5">
      <p className="text-justify">
        <span className="text-secondary h4 mr-3">
          <FontAwesomeIcon icon="quote-left" />
        </span>
        <em dangerouslySetInnerHTML={{ __html: props.pitch }} />
        <span className="text-secondary h4 ml-3">
          <FontAwesomeIcon icon="quote-right" />
        </span>
      </p>
    </blockquote>

    <h5 className="text-center">Follow me</h5>

    <NavSocialIcons
      useOriginalColor
      github={props.author.github}
      linkedin={props.author.linkedin}
      twitter={props.author.twitter}
      className="h3 justify-content-center pt-0"
      role="list"
    />
  </section>
)

interface SkillsSet {
  title: string
  values: string[]
}

interface TechnicalSkillsSectionProps {
  devOps: SkillsSet
  programming: SkillsSet
  love: SkillsSet[]
}

const TechnicalSkillsSection = (props: TechnicalSkillsSectionProps) => (
  <section id="technicalSkills" className="resume">
    <h2 className="text-primary text-uppercase">Technical Skills</h2>
    <h3>
      <FontAwesomeIcon icon="laptop-code" className="text-secondary" /> Programming
    </h3>
    <Container className="mb-4" fluid>
      {Object.entries(props.programming).map(([key, value]) => (
        <TechnicalSkills key={key} title={value.title} skills={value.values} />
      ))}
    </Container>

    <h3>
      <FontAwesomeIcon icon="space-shuttle" className="text-secondary" /> DevOps
    </h3>
    <Container className="mb-4" fluid>
      {Object.entries(props.devOps).map(([key, value]) => (
        <TechnicalSkills key={key} title={value.title} skills={value.values} />
      ))}
    </Container>

    <h3>
      <FontAwesomeIcon icon="heart" className="text-secondary" /> Stack
    </h3>
    <Container className="mb-4" fluid>
      <table>
        <tbody>
          {props.love.map(love => (
            <tr key={love.title}>
              <th className="pr-4">{love.title}</th>
              <td className="d-flex justify-content-center align-items-center py-2">
                {love.values.map((v, idx) => {
                  const el = (
                    <LabelledIcon label={v} labelClassName="font-weight-light">
                      <OriginalIcon className="text-2x" icon={v} />
                    </LabelledIcon>
                  )
                  if (love.values.length > 1 && idx < love.values.length - 1) {
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
          ))}
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
    id: 'about',
    title: 'About'
  },
  {
    id: 'technicalSkills',
    title: 'Technical Skills'
  }
]

const renderLeftMenu = (links: Link[]) => () => (
  <Nav className="flex-column align-items-center" as="ul">
    {links.map(link => (
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

interface IndexPageProps {
  data: {
    site: SiteInformation
    markdownRemark: {
      frontmatter: {
        section: {
          about: AboutSectionProps
          technicalSkills: TechnicalSkillsSectionProps
        }
      }
    }
  }
}

const IndexPage = ({ data }: IndexPageProps) => (
  <Layout author={data.site.siteMetadata.author} renderLeftMenu={renderLeftMenu(leftMenuItems)}>
    <Seo site={data.site} />
    <AboutSection
      author={data.site.siteMetadata.author}
      {...data.markdownRemark.frontmatter.section.about}
    />
    <hr />
    <TechnicalSkillsSection {...data.markdownRemark.frontmatter.section.technicalSkills} />
  </Layout>
)

export const pageQuery = graphql`
  query IndexPageQuery($slug: String!) {
    site {
      ...SiteInformation
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        section {
          about {
            title
            subTitle
            services {
              icon
              title
              description
            }
            pitch
          }
          technicalSkills {
            devOps {
              title
              values
            }
            programming {
              title
              values
            }
            love {
              title
              values
            }
          }
        }
      }
    }
  }
`

export default IndexPage
