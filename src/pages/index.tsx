import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Col, Card, CardGroup, CardDeck, Nav as BootstrapNav } from 'react-bootstrap'
import { Link as ScrollSpyLink } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@iconify/react'
import javaIcon from '@iconify/icons-logos/java'
import scalaIcon from '@iconify/icons-logos/scala'
import kotlinIcon from '@iconify/icons-logos/kotlin'
import goIcon from '@iconify/icons-logos/go'
import html5Icon from '@iconify/icons-logos/html-5'
import css3Icon from '@iconify/icons-logos/css-3'
import javascriptIcon from '@iconify/icons-logos/javascript'
import typescriptIcon from '@iconify/icons-logos/typescript-icon'
import reactIcon from '@iconify/icons-logos/react'
import postgresqlIcon from '@iconify/icons-logos/postgresql'
import mysqlIcon from '@iconify/icons-logos/mysql'
import mongodbIcon from '@iconify/icons-logos/mongodb'
import cassandraIcon from '@iconify/icons-logos/cassandra'
import arangodbIcon from '@iconify/icons-logos/arangodb'
import elasticsearchIcon from '@iconify/icons-logos/elasticsearch'
import { PhotoCard } from '../components/photocard/PhotoCard'
import { MainLayout as Layout } from '../components/layout'
import { Seo, SiteInformation, SiteMetadata } from '../components/metadata'
import { Nav, NavSocialIcons } from '../components/nav'

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
    <h3 className="text-muted pt-0 mb-5">Creative Technical Architect</h3>

    <h4 className="text-primary">Help customers to</h4>

    <CardGroup className="mb-5">
      <Col sm={12} md={6} lg={3} className="px-0">
        <Card className="border-0">
          <div className="text-center text-3x text-secondary">
            <FontAwesomeIcon icon={['fab', 'connectdevelop']} />
          </div>
          <Card.Body>
            <Card.Title className="text-center" as="h5">
              Architecture
            </Card.Title>
            <Card.Text className="text-center">
              Design microservices in a resilient, responsive and elastic architecture
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={3} className="px-0">
        <Card className="border-0">
          <div className="text-center text-3x text-secondary">
            <FontAwesomeIcon icon="rocket" />
          </div>
          <Card.Body>
            <Card.Title className="text-center" as="h5">
              DevOps
            </Card.Title>
            <Card.Text className="text-center">
              Design pipeline according to requirements like security, audit, segregation
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={3} className="px-0">
        <Card className="border-0">
          <div className="text-center text-3x text-secondary">
            <FontAwesomeIcon icon="code" />
          </div>
          <Card.Body>
            <Card.Title className="text-center" as="h5">
              Code
            </Card.Title>
            <Card.Text className="text-center">
              Implement from proof of concept to production
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={3} className="px-0">
        <Card className="border-0">
          <div className="text-center text-3x text-secondary">
            <FontAwesomeIcon icon="user-graduate" />
          </div>
          <Card.Body>
            <Card.Title className="text-center" as="h5">
              Training
            </Card.Title>
            <Card.Text className="text-center">
              Help people to get onboard with courses, presentations, sociabilizations and
              mentorships from Developers to Management
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </CardGroup>

    <blockquote className="blockquote mb-5">
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

const TechnicalSkillsSection = () => (
  <section id="skills" className="resume">
    <h2 className="text-primary text-uppercase">Technical Skills</h2>
    <p>
      {
        "I started as a java backend developer and even if java is still my main language, I've learned a lot more."
      }
    </p>
    <h3>Architecture & Design</h3>

    <CardDeck>
      <Card className="border-0">
        <div className="text-center text-3x text-secondary">
          <FontAwesomeIcon icon={['fab', 'connectdevelop']} />
        </div>
        <Card.Body>
          <Card.Title className="text-center" as="h5">
            Architecture
          </Card.Title>
          <Card.Text className="text-center">
            Microservices, Distributed sytem, Domain Driven, Event Sourcing, CQRS, Request/Reply
            (REST, gRPC)
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="border-0">
        <div className="text-center text-3x text-secondary">
          <FontAwesomeIcon icon="code" />
        </div>
        <Card.Body>
          <Card.Title className="text-center" as="h5">
            Code style
          </Card.Title>
          <Card.Text className="text-center">
            Object Oriented Programming (OOP), Aspect Oriented Programming (AOP), Functional
            Programming (FP), Design Patterns
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="border-0">
        <div className="text-center text-3x text-secondary">
          <FontAwesomeIcon icon="pen" />
        </div>
        <Card.Body>
          <Card.Title className="text-center" as="h5">
            Drawing
          </Card.Title>
          <Card.Text className="text-center">BPMN, UML, Archimate</Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>

    <h3>Programming</h3>
    <h4 className="text-center">Backend</h4>
    <ul className="list-unstyled align-self-center">
      <li className="d-flex align-items-center mb-1">
        <div className="flex-shrink-0 d-flex flex-column align-items-center mr-3">
          <Icon className="text-2x" icon={javaIcon} />
          <strong>Java</strong>
        </div>
        <div>
          <p className="my-0">
            Spring-Boot, Apache Camel, AspectJ, Hazelcast, Camunda, JPA & Hibernate, Gradle, Groovy,
            Maven
          </p>
        </div>
      </li>
      <li className="d-flex align-items-center mb-1">
        <div className="flex-shrink-0 d-flex flex-column align-items-center mr-3">
          <Icon className="text-2x" icon={scalaIcon} />
          <strong>Scala</strong>
        </div>
        <div>
          <p className="my-0">Akka, Play, Sbt</p>
        </div>
      </li>
    </ul>
    <ul className="list-inline align-self-center">
      <li className="list-inline-item mr-3">
        <div className="d-flex flex-column align-items-center">
          <Icon className="text-2x" icon={kotlinIcon} />
          <strong>Kotlin</strong>
        </div>
      </li>
      <li className="list-inline-item mr-3">
        <div className="d-flex flex-column align-items-center">
          <Icon className="text-2x" icon={goIcon} />
          <strong>Go</strong>
        </div>
      </li>
    </ul>

    <h4 className="text-center">Frontend</h4>
    <ul className="list-inline align-self-center">
      <li className="list-inline-item mr-3">
        <div className="d-flex flex-column align-items-center">
          <Icon className="text-2x" icon={html5Icon} />
          <strong>HTML 5</strong>
        </div>
      </li>
      <li className="list-inline-item mr-3">
        <div className="d-flex flex-column align-items-center">
          <Icon className="text-2x" icon={css3Icon} />
          <strong>CSS 3</strong>
        </div>
      </li>
      <li className="list-inline-item mr-3">
        <div className="d-flex flex-column align-items-center">
          <Icon className="text-2x" icon={javascriptIcon} />
          <strong>Javascript</strong>
        </div>
      </li>
      <li className="list-inline-item mr-3">
        <div className="d-flex flex-column align-items-center">
          <Icon className="text-2x" icon={typescriptIcon} />
          <strong>Typescript</strong>
        </div>
      </li>
      <li className="list-inline-item mr-3">
        <div className="d-flex flex-column align-items-center">
          <Icon className="text-2x" icon={reactIcon} />
          <strong>Reactjs</strong>
        </div>
      </li>
    </ul>
    <h4 className="text-center">Database</h4>
    <ul className="list-inline align-self-center">
      <li className="list-inline-item mr-3">
        <div className="d-flex flex-column align-items-center">
          <Icon className="text-2x" icon={postgresqlIcon} />
          <strong>PostgreSQL</strong>
        </div>
      </li>
      <li className="list-inline-item mr-3">
        <div className="d-flex flex-column align-items-center">
          <Icon className="text-2x" icon={mysqlIcon} />
          <strong>MySQL</strong>
        </div>
      </li>
      <li className="list-inline-item mr-3">
        <div className="d-flex flex-column align-items-center">
          <Icon className="text-2x" icon={mongodbIcon} />
          <strong>Mongodb</strong>
        </div>
      </li>
      <li className="list-inline-item mr-3">
        <div className="d-flex flex-column align-items-center">
          <Icon className="text-2x" icon={cassandraIcon} />
          <strong>Cassandra</strong>
        </div>
      </li>
      <li className="list-inline-item mr-3">
        <div className="d-flex flex-column align-items-center">
          <Icon className="text-2x" icon={elasticsearchIcon} />
          <strong>Elasticsearch</strong>
        </div>
      </li>
      <li className="list-inline-item mr-3">
        <div className="d-flex flex-column align-items-center">
          <Icon className="text-2x" icon={arangodbIcon} />
          <strong>Arangodb</strong>
        </div>
      </li>
    </ul>

    <h4 className="text-center">Message bus</h4>
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
  }
}

const IndexPage = ({ data }: IndexPageProps) => (
  <Layout author={data.site.siteMetadata.author} renderLeftMenu={renderLeftMenu}>
    <Seo site={data.site} />
    <AboutSection {...data.site.siteMetadata} />
    <hr />
    <TechnicalSkillsSection />
    <MDXRenderer author={data.site.siteMetadata.author}>{data.mdx.body}</MDXRenderer>
  </Layout>
)

export const pageQuery = graphql`
  query IndexPageQuery {
    site {
      ...SiteInformation
    }
    mdx(fields: { slug: { eq: "/" } }) {
      body
      tableOfContents(maxDepth: 2)
    }
  }
`

export default IndexPage
