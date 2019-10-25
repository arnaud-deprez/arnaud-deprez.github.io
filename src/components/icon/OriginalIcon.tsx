import React from 'react'
import * as _ from 'lodash'
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
import elasticsearchIcon from '@iconify/icons-logos/elasticsearch'
import rabbitmqIcon from '@iconify/icons-logos/rabbitmq'
import kafkaIcon from '@iconify/icons-logos/kafka-icon'
import springIcon from '@iconify/icons-logos/spring'
import apacheCamelIcon from '@iconify/icons-logos/apache-camel'
import hibernateIcon from '@iconify/icons-logos/hibernate'
import gradleIcon from '@iconify/icons-logos/gradle'
import akkaIcon from '@iconify/icons-logos/akka'
import playIcon from '@iconify/icons-logos/play'
import clojureIcon from '@iconify/icons-logos/clojure'
import kubernetesIcon from '@iconify/icons-logos/kubernetes'
import openshiftIcon from '@iconify/icons-logos/openshift'
import dockerIcon from '@iconify/icons-logos/docker-icon'
import gitIcon from '@iconify/icons-logos/git-icon'
import gitlabIcon from '@iconify/icons-logos/gitlab'
import seleniumIcon from '@iconify/icons-logos/selenium'
import sonarqubeIcon from '@iconify/icons-logos/sonarqube'
import prometheusIcon from '@iconify/icons-logos/prometheus'
import grafanaIcon from '@iconify/icons-logos/grafana'
import logstashIcon from '@iconify/icons-logos/logstash'
import kibanaIcon from '@iconify/icons-logos/kibana'
import snykIcon from '@iconify/icons-logos/snyk'
import sassIcon from '@iconify/icons-logos/sass'
import nodejsIcon from '@iconify/icons-logos/nodejs-icon'

// Downloaded svg icons
import SbtIcon from '../../images/logos/svg-icons/sbt-icon.svg'
import CamundaIcon from '../../images/logos/svg-icons/camunda-icon.svg'
import GroovyIcon from '../../images/logos/svg-icons/groovy-lang-icon.svg'
import BashIcon from '../../images/logos/svg-icons/gnu_bash-icon.svg'
import AnchoreIcon from '../../images/logos/svg-icons/anchoreio-icon.svg'
// TODO: why ActiveMQ svg is not shown
// import ActiveMQIcon from '../../images/logos/svg-icons/apache_activemq-icon.svg'
import FluentdIcon from '../../images/logos/svg-icons/fluentd-icon.svg'
import HazelcastIcon from '../../images/logos/svg-icons/hazelcast-icon.svg'
import CassandraIcon from '../../images/logos/svg-icons/apache_cassandra-icon.svg'
import ArangoDBIcon from '../../images/logos/svg-icons/arangodb-icon.svg'
import MongoDBIcon from '../../images/logos/svg-icons/mongodb-icon.svg'
import JenkinsIcon from '../../images/logos/svg-icons/jenkins-icon.svg'
import MavenIcon from '../../images/logos/svg-icons/apache_maven-icon.svg'
import CSharpIcon from '../../images/logos/svg-icons/csharp-icon.svg'

// Images
import owaspImg from '../../images/logos/owasp-icon.png'
import clairImg from '../../images/logos/clair-icon.png'
import activemqImg from '../../images/logos/apache_activemq-icon.png'

export interface IconProps {
  // should not have any children
  children?: never

  // optional properties passed to node
  id?: string
  className?: string
  style?: object

  // optional properties for icon
  color?: string
  inline?: boolean | string
  box?: boolean | string

  // dimensions and alignment
  width?: number | string
  height?: number | string
  align?: string

  // transformations
  hFlip?: boolean
  vFlip?: boolean
  flip?: string
  rotate?: number | string
}

const iconify = (icon: object, defaultProps: IconProps = {}) => (props: IconProps) => (
  <Icon
    {...{
      ...defaultProps,
      ...props
    }}
    icon={icon}
  />
)
const imgIcon = (
  icon: string,
  defaultProps: IconProps = { style: { width: '1em', height: '1em' } }
) => (props: IconProps) => (
  <img
    {...{
      ...defaultProps,
      ...props
    }}
    src={icon}
  />
)
const svgIcon = (Component: React.ElementType<IconProps>, defaultProps: IconProps = {}) => (
  props: IconProps
) => (
  <Component
    {...{
      ...defaultProps,
      ...props
    }}
  />
)

interface OriginalIcons {
  [key: string]: (props: IconProps) => JSX.Element
}

const iconContainer: OriginalIcons = {
  java: iconify(javaIcon),
  scala: iconify(scalaIcon),
  kotlin: iconify(kotlinIcon),
  go: iconify(goIcon, { width: '2em', height: '1em' }),
  'html-5': iconify(html5Icon),
  'css-3': iconify(css3Icon),
  sass: iconify(sassIcon),
  javascript: iconify(javascriptIcon),
  kafka: iconify(kafkaIcon),
  typescript: iconify(typescriptIcon),
  reactjs: iconify(reactIcon),
  postgresql: iconify(postgresqlIcon),
  mysql: iconify(mysqlIcon),
  mongodb: svgIcon(MongoDBIcon),
  cassandra: svgIcon(CassandraIcon),
  arangodb: svgIcon(ArangoDBIcon),
  elasticsearch: iconify(elasticsearchIcon),
  spring: iconify(springIcon),
  'apache-camel': iconify(apacheCamelIcon),
  'jpa-hibernate': iconify(hibernateIcon),
  gradle: iconify(gradleIcon),
  akka: iconify(akkaIcon),
  play: iconify(playIcon),
  rabbitmq: iconify(rabbitmqIcon),
  'apache-kafka': iconify(kafkaIcon),
  clojure: iconify(clojureIcon),
  kubernetes: iconify(kubernetesIcon),
  openshift: iconify(openshiftIcon),
  docker: iconify(dockerIcon),
  git: iconify(gitIcon),
  gitlab: iconify(gitlabIcon),
  selenium: iconify(seleniumIcon),
  sonarqube: iconify(sonarqubeIcon, { width: '3em', height: '1em' }),
  jenkins: svgIcon(JenkinsIcon),
  prometheus: iconify(prometheusIcon),
  grafana: iconify(grafanaIcon),
  logstash: iconify(logstashIcon),
  kibana: iconify(kibanaIcon),
  snyk: iconify(snykIcon),
  sbt: svgIcon(SbtIcon),
  camunda: svgIcon(CamundaIcon),
  groovy: svgIcon(GroovyIcon),
  bash: svgIcon(BashIcon),
  anchore: svgIcon(AnchoreIcon),
  'apache-activemq': imgIcon(activemqImg, { style: { width: '1em', height: '1.5em' } }),
  fluentd: svgIcon(FluentdIcon),
  hazelcast: svgIcon(HazelcastIcon),
  maven: svgIcon(MavenIcon),
  'c#': svgIcon(CSharpIcon),
  owasp: imgIcon(owaspImg),
  clair: imgIcon(clairImg),
  nodejs: iconify(nodejsIcon)
}

export interface OriginalIconProps extends IconProps {
  icon: string
}

export const OriginalIcon = ({ icon, ...rest }: OriginalIconProps): JSX.Element => {
  const key = icon.replace(/[\s&]+/gi, '-').toLowerCase()
  return _.has(iconContainer, key) ? iconContainer[key](rest) : <i />
}
