import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Container, Row, Col, Card, CardGroup, Table, Nav as BootstrapNav } from 'react-bootstrap'
import { Link as ScrollSpyLink } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PhotoCard } from '../components/photocard/PhotoCard'
import { MainLayout as Layout } from '../components/layout'
import { Seo, SiteInformation, SiteMetadata } from '../components/metadata'
import { Nav, NavSocialIcons } from '../components/nav'
import { TechnicalSkills } from '../components/about'
import { LabelledIcon, OriginalIcon } from '../components/icon'

import './index.scss'

const renderLeftMenu = () => (
  <Nav className="flex-column align-items-center" as="ul">
    <BootstrapNav.Link
      activeClass="active"
      to="about"
      spy={true}
      smooth={true}
      duration={200}
      as={ScrollSpyLink}
    >
      About
    </BootstrapNav.Link>
    <BootstrapNav.Link
      activeClass="active"
      to="skills"
      spy={true}
      smooth={true}
      duration={200}
      as={ScrollSpyLink}
    >
      Technical skills
    </BootstrapNav.Link>
    <BootstrapNav.Link
      activeClass="active"
      to="interests"
      spy={true}
      smooth={true}
      duration={200}
      as={ScrollSpyLink}
    >
      Interests
    </BootstrapNav.Link>
  </Nav>
)

const AboutSection = ({ author }: SiteMetadata) => (
  <section id="about" className="resume">
    <PhotoCard className="mb-4 d-lg-none" />

    <h2 className="text-uppercase mb-0">
      Arnaud <span className="text-primary">Deprez</span>
    </h2>
    <h3 className="text-muted h4 pt-0 mb-5">Creative Technical Architect</h3>

    <h4 className="text-primary">Help customers to</h4>

    <CardGroup className="mb-4">
      <Col sm={12} md={6} lg={3} className="px-0">
        <Card className="border-0 mb-3">
          <div className="text-center text-3x text-secondary">
            <FontAwesomeIcon icon="project-diagram" />
          </div>
          <Card.Body className="pt-2">
            <Card.Title className="text-center" as="h5">
              Architecture
            </Card.Title>
            <Card.Text className="text-center">
              Design microservices in a{' '}
              <a href="https://www.reactivemanifesto.org/">
                resilient, responsive and elastic architecture
              </a>{' '}
              by applying the right tactics from <abbr title="Domain Driven Design">DDD</abbr>{' '}
              analysis (Event Sourcing,{' '}
              <abbr title="Command and Query Responsibility Segregation">CQRS</abbr>,
              Request/Reply).
              <br />
              Use drawing convention such as BPMN, UML or Archimate when it helps.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={3} className="px-0">
        <Card className="border-0 mb-3">
          <div className="text-center text-3x text-secondary">
            <FontAwesomeIcon icon="rocket" />
          </div>
          <Card.Body className="pt-2">
            <Card.Title className="text-center" as="h5">
              DevOps
            </Card.Title>
            <Card.Text className="text-center">
              Design pipeline following{' '}
              <a href="https://www.weave.works/technologies/gitops/">GitOps</a> best practices to
              match your requirements like security, audit, segregation
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={3} className="px-0">
        <Card className="border-0 mb-3">
          <div className="text-center text-3x text-secondary">
            <FontAwesomeIcon icon="code" />
          </div>
          <Card.Body className="pt-2">
            <Card.Title className="text-center" as="h5">
              Code
            </Card.Title>
            <Card.Text className="text-center">
              Implement from proof of concept to production following the{' '}
              <a href="https://12factor.net/">twelve-factor app manifest</a> and applying the right
              pattern (<abbr title="Object Oriented Programming">OOP</abbr>,{' '}
              <abbr title="Functional Programming">FP</abbr>,{' '}
              <abbr title="Aspect Oriented Programming">AOP</abbr>) at the right place for clean
              code.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={3} className="px-0">
        <Card className="border-0 mb-3">
          <div className="text-center text-3x text-secondary">
            <FontAwesomeIcon icon="user-graduate" />
          </div>
          <Card.Body className="pt-2">
            <Card.Title className="text-center" as="h5">
              Training
            </Card.Title>
            <Card.Text className="text-center">
              Help people to get onboard with courses, presentations, socialization and mentorship
              from Developers to Management
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </CardGroup>

    <blockquote className="container mb-5">
      <p className="text-justify">
        <span className="text-primary h4 mr-3">
          <FontAwesomeIcon icon="quote-left" />
        </span>
        <em>
          {"I'm used to work in an "}
          <strong>agile iterative way</strong> - usually in scrum or kanban - with high focus on
          delivering usable increments to speed up adoption and get quick feedback for continuous
          improvements. What I like the most in my job is to <strong>learn new technologies</strong>{' '}
          to fill my toolbox so that I can pick the right tool to solve your needs. When I can, I
          also try to <strong>contribute</strong> back to open source technologies I use.
        </em>
        <span className="text-primary h4 ml-3">
          <FontAwesomeIcon icon="quote-right" />
        </span>
      </p>
    </blockquote>

    <h5 className="text-center">Follow me</h5>

    <NavSocialIcons
      useOriginalColor
      github={author.github}
      linkedin={author.linkedin}
      twitter={author.twitter}
      className="h3 justify-content-center pt-0"
    />
  </section>
)

interface SkillsSet {
  title: string
  values: any[]
}

interface TechnicalSkillsSectionProps {
  programming: {
    backend: SkillsSet
    frontend: SkillsSet
    database: SkillsSet
    messageBus: SkillsSet
  }
  devOps: {
    platform: SkillsSet
    monitoring: SkillsSet
    security: SkillsSet
    tooling: SkillsSet
  }
}

const TechnicalSkillsSection = (props: TechnicalSkillsSectionProps) => (
  <section id="skills" className="resume">
    <h2 className="text-primary text-uppercase">Technical Skills</h2>
    <p className="lead mb-4">
      {
        "I started as a java backend developer and even if java is still my main language, I've learned a lot more."
      }
    </p>

    <h3>
      <FontAwesomeIcon icon="laptop-code" className="text-secondary" /> Programming
    </h3>
    <Container className="mb-3" fluid>
      {Object.entries(props.programming).map(([key, value]) => (
        <TechnicalSkills key={key} title={value.title} skills={value.values} />
      ))}
    </Container>

    <h3>
      <FontAwesomeIcon icon="space-shuttle" className="text-secondary" /> DevOps
    </h3>
    <Container className="mb-3" fluid>
      {Object.entries(props.devOps).map(([key, value]) => (
        <TechnicalSkills key={key} title={value.title} skills={value.values} />
      ))}
    </Container>

    <h3>
      <FontAwesomeIcon icon="heart" className="text-secondary" /> Stack
    </h3>
    <Container className="mb-3" fluid>
      <table>
        <tbody>
          <tr>
            <th className="pr-3">Frontend</th>
            <td className="d-flex justify-content-center py-2">
              <LabelledIcon label="Reactjs" labelClassName="font-weight-light">
                <OriginalIcon className="text-2x" icon="reactjs" />
              </LabelledIcon>
              {' + '}
              <LabelledIcon label="Nodejs" labelClassName="font-weight-light">
                <OriginalIcon className="text-2x" icon="nodejs" />
              </LabelledIcon>
            </td>
          </tr>
          <tr>
            <th className="pr-3">Backend</th>
            <td className="d-flex justify-content-center py-2">
              <LabelledIcon label="Scala" labelClassName="font-weight-light">
                <OriginalIcon className="text-2x" icon="scala" />
              </LabelledIcon>
            </td>
          </tr>
          <tr>
            <th className="pr-3">Platform</th>
            <td className="d-flex justify-content-center py-2">
              <LabelledIcon label="Kubernetes" labelClassName="font-weight-light">
                <OriginalIcon className="text-2x" icon="kubernetes" />
              </LabelledIcon>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  </section>
)

interface IndexPageProps {
  data: {
    site: SiteInformation
    mdx: {
      body: string
      tableOfContents: [
        {
          url: string
          title: string
        }
      ]
    }
    aboutJson: {
      skills: TechnicalSkillsSectionProps
    }
  }
}

const IndexPage = ({ data }: IndexPageProps) => (
  <Layout author={data.site.siteMetadata.author} renderLeftMenu={renderLeftMenu}>
    <Seo site={data.site} />
    <AboutSection {...data.site.siteMetadata} />
    <hr />
    <TechnicalSkillsSection {...data.aboutJson.skills} />
    <hr />
    <MDXRenderer author={data.site.siteMetadata.author}>{data.mdx.body}</MDXRenderer>
  </Layout>
)

export const pageQuery = graphql`
  query IndexPageQuery {
    site {
      ...SiteInformation
    }
    mdx(fields: { slug: { eq: "/about/" } }) {
      body
      tableOfContents(maxDepth: 2)
    }
    aboutJson {
      skills {
        programming {
          backend {
            title
            values
          }
          frontend {
            title
            values
          }
          database {
            title
            values
          }
          messageBus {
            title
            values
          }
        }
        devOps {
          platform {
            title
            values
          }
          tooling {
            title
            values
          }
          monitoring {
            title
            values
          }
          security {
            title
            values
          }
        }
      }
    }
  }
`

export default IndexPage
