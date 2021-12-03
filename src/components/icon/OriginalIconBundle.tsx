import React from 'react'
import { has } from 'lodash'
import { Icon, IconifyIconProps, IconifyIcon } from '@iconify/react/dist/offline'

import javaIcon from '@iconify-icons/logos/java'
import scalaIcon from '@iconify-icons/logos/scala'
import kotlinIcon from '@iconify-icons/logos/kotlin'
import goIcon from '@iconify-icons/logos/go'
import html5Icon from '@iconify-icons/logos/html-5'
import css3Icon from '@iconify-icons/logos/css-3'
import javascriptIcon from '@iconify-icons/logos/javascript'
import typescriptIcon from '@iconify-icons/logos/typescript-icon'
import reactIcon from '@iconify-icons/logos/react'
import postgresqlIcon from '@iconify-icons/logos/postgresql'
import mysqlIcon from '@iconify-icons/logos/mysql'
import elasticsearchIcon from '@iconify-icons/logos/elasticsearch'
import rabbitmqIcon from '@iconify-icons/logos/rabbitmq'
import kafkaIcon from '@iconify-icons/logos/kafka-icon'
import springIcon from '@iconify-icons/logos/spring'
import apacheCamelIcon from '@iconify-icons/logos/apache-camel'
import hibernateIcon from '@iconify-icons/logos/hibernate'
import gradleIcon from '@iconify-icons/logos/gradle'
import akkaIcon from '@iconify-icons/logos/akka'
import playIcon from '@iconify-icons/logos/play'
import clojureIcon from '@iconify-icons/logos/clojure'
import kubernetesIcon from '@iconify-icons/logos/kubernetes'
import openshiftIcon from '@iconify-icons/logos/openshift'
import dockerIcon from '@iconify-icons/logos/docker-icon'
import gitIcon from '@iconify-icons/logos/git-icon'
import gitlabIcon from '@iconify-icons/logos/gitlab'
import seleniumIcon from '@iconify-icons/logos/selenium'
import sonarqubeIcon from '@iconify-icons/logos/sonarqube'
import prometheusIcon from '@iconify-icons/logos/prometheus'
import grafanaIcon from '@iconify-icons/logos/grafana'
import logstashIcon from '@iconify-icons/logos/logstash'
import kibanaIcon from '@iconify-icons/logos/kibana'
import snykIcon from '@iconify-icons/logos/snyk'
import sassIcon from '@iconify-icons/logos/sass'
import nodejsIcon from '@iconify-icons/logos/nodejs-icon'
import gatsbyIcon from '@iconify-icons/logos/gatsby'
import bootstrapIcon from '@iconify-icons/logos/bootstrap'
import netlifyIcon from '@iconify-icons/logos/netlify'
import groovyIcon from '@iconify-icons/vscode-icons/file-type-groovy'
import bashIcon from '@iconify-icons/logos/bash-icon'
import jenkinsIcon from '@iconify-icons/vscode-icons/file-type-jenkins'
import mavenIcon from '@iconify-icons/vscode-icons/file-type-maven'
import csharpIcon from '@iconify-icons/vscode-icons/file-type-csharp'

// Downloaded svg icons
import SbtIcon from '../../images/logos/svg-icons/sbt-icon.svg'
import CamundaIcon from '../../images/logos/svg-icons/camunda-icon.svg'
import AnchoreIcon from '../../images/logos/svg-icons/anchoreio-icon.svg'
import FluentdIcon from '../../images/logos/svg-icons/fluentd-icon.svg'
import HazelcastIcon from '../../images/logos/svg-icons/hazelcast-icon.svg'
import CassandraIcon from '../../images/logos/svg-icons/apache_cassandra-icon.svg'
import ArangoDBIcon from '../../images/logos/svg-icons/arangodb-icon.svg'
import MongoDBIcon from '../../images/logos/svg-icons/mongodb-icon.svg'

// Images
import owaspImg from '../../images/logos/owasp-icon.png'
import clairImg from '../../images/logos/clair-icon.png'
import activemqImg from '../../images/logos/apache_activemq-icon.png'

export interface IconProps {
  // optional properties passed to node
  id?: string

  // optional properties for icon
  color?: string
  inline?: boolean | string
  box?: boolean | string

  // transformations
  hFlip?: boolean
  vFlip?: boolean
  flip?: string
  rotate?: number | string
}

type IconifyProps = Omit<IconifyIconProps, 'icon'> & IconProps
// eslint-disable-next-line react/display-name
const iconify = (icon: IconifyIcon, defaultProps: IconifyProps = {}) => (
  props: IconifyProps
): React.ReactNode => (
  <Icon
    {...{
      ...defaultProps,
      ...props,
      icon,
      fr: '',
    }}
  />
)

type ImgIconProps = IconProps &
  Omit<React.HTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'loading'>
const imgIcon = (
  icon: string,
  alt: string,
  defaultProps: ImgIconProps = { style: { width: '1em', height: '1em' } }
) => {
  const ImgIcon = (props: IconProps) => (
    <img
      {...{
        ...defaultProps,
        ...props,
      }}
      src={icon}
      alt={alt}
      loading="lazy"
    />
  )
  return ImgIcon
}

type SvgIconProps = IconProps
const svgIcon = (Component: React.ElementType<IconProps>, defaultProps: SvgIconProps = {}) => {
  const SvgIcon = (props: IconProps) => (
    <Component
      {...{
        ...defaultProps,
        ...props,
      }}
    />
  )
  return SvgIcon
}

interface OriginalIcons {
  [key: string]: (props: IconProps) => React.ReactNode
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
  typescript: iconify(typescriptIcon),
  reactjs: iconify(reactIcon),
  postgresql: iconify(postgresqlIcon),
  mysql: iconify(mysqlIcon),
  mongodb: svgIcon(MongoDBIcon),
  cassandra: svgIcon(CassandraIcon),
  arangodb: svgIcon(ArangoDBIcon),
  elasticsearch: iconify(elasticsearchIcon),
  spring: iconify(springIcon),
  camel: iconify(apacheCamelIcon),
  hibernate: iconify(hibernateIcon),
  gradle: iconify(gradleIcon),
  akka: iconify(akkaIcon),
  play: iconify(playIcon),
  rabbitmq: iconify(rabbitmqIcon),
  kafka: iconify(kafkaIcon),
  clojure: iconify(clojureIcon),
  kubernetes: iconify(kubernetesIcon),
  openshift: iconify(openshiftIcon),
  docker: iconify(dockerIcon),
  git: iconify(gitIcon),
  gitlab: iconify(gitlabIcon),
  selenium: iconify(seleniumIcon),
  sonarqube: iconify(sonarqubeIcon, { width: '3em', height: '1em' }),
  jenkins: iconify(jenkinsIcon),
  prometheus: iconify(prometheusIcon),
  grafana: iconify(grafanaIcon),
  logstash: iconify(logstashIcon),
  kibana: iconify(kibanaIcon),
  snyk: iconify(snykIcon),
  sbt: svgIcon(SbtIcon),
  camunda: svgIcon(CamundaIcon),
  groovy: iconify(groovyIcon),
  bash: iconify(bashIcon),
  anchore: svgIcon(AnchoreIcon),
  activemq: imgIcon(activemqImg, 'ActiveMQ', { style: { width: '0.6667em', height: '1em' } }),
  fluentd: svgIcon(FluentdIcon),
  hazelcast: svgIcon(HazelcastIcon),
  maven: iconify(mavenIcon),
  'c#': iconify(csharpIcon),
  owasp: imgIcon(owaspImg, 'OWASP'),
  clair: imgIcon(clairImg, 'clair'),
  nodejs: iconify(nodejsIcon),
  gatsby: iconify(gatsbyIcon),
  bootstrap: iconify(bootstrapIcon),
  netlify: iconify(netlifyIcon),
}

export interface OriginalIconProps extends IconProps {
  icon: string
}

export const OriginalIcon = ({ icon, ...rest }: OriginalIconProps): React.ReactNode => {
  const key = icon.replace(/[\s&]+/gi, '-').toLowerCase()
  return has(iconContainer, key) ? iconContainer[key](rest) : <i />
}

export default OriginalIcon
