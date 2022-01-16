import React from 'react'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Tip.scss'

const icon = (icon) => (props) => <FontAwesomeIcon {...props} icon={icon} />

const VARIANTS = {
  note: {
    Icon: icon('info'),
  },
  tip: {
    Icon: icon('lightbulb'),
  },
  caution: {
    Icon: icon('exclamation'),
  },
  warning: {
    Icon: icon('exclamation'),
  },
  danger: {
    Icon: icon('radiation'),
  },
}

const Tip = ({ variant = 'note', children }) => {
  const v = VARIANTS[variant]
  if (!v) return null
  return (
    <div className={clsx('tip', variant && `tip-${variant}`)}>
      <i className="icon rounded-circle">
        <v.Icon />
      </i>
      <div className="tip-box rounded shadow-sm">{children}</div>
    </div>
  )
}

export default Tip
