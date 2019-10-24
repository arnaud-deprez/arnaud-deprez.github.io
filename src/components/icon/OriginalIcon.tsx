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
import mongodbIcon from '@iconify/icons-logos/mongodb'
import cassandraIcon from '@iconify/icons-logos/cassandra'
import arangodbIcon from '@iconify/icons-logos/arangodb'
import elasticsearchIcon from '@iconify/icons-logos/elasticsearch'

interface IconProps {
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

const icon = (icon: object) => (props: IconProps) => <Icon {...props} icon={icon} />

interface OriginalIcons {
  [key: string]: (props: IconProps) => JSX.Element
}

const iconContainer: OriginalIcons = {
  java: icon(javaIcon),
  scala: icon(scalaIcon),
  kotlin: icon(kotlinIcon),
  go: icon(goIcon),
  html5: icon(html5Icon),
  css3: icon(css3Icon),
  javascript: icon(javascriptIcon),
  typescript: icon(typescriptIcon),
  reactjs: icon(reactIcon),
  postgresql: icon(postgresqlIcon),
  mysql: icon(mysqlIcon),
  mongodb: icon(mongodbIcon),
  cassandra: icon(cassandraIcon),
  arangodb: icon(arangodbIcon),
  elasticsearch: icon(elasticsearchIcon)
}

export interface OriginalIconProps extends IconProps {
  icon: string
}

const OriginalIcon = ({ icon, ...rest }: OriginalIconProps): JSX.Element => {
  const key = icon.replace(/ /gi, '').toLowerCase()
  return _.has(iconContainer, key) ? iconContainer[key](rest) : <i />
}

export default OriginalIcon
