import React from 'react'
import loadable from '@loadable/component'
import { useInView } from 'react-intersection-observer'
// import InternalOriginalIcon from './OriginalIconBundle'

const InternalOriginalIcon = loadable(() => import('./OriginalIconBundle'))

export const OriginalIcon = (props: unknown): JSX.Element => {
  const [ref] = useInView({
    triggerOnce: true,
    rootMargin: '80px 0px',
  })

  return (
    // <span ref={ref}>
    <InternalOriginalIcon {...props} />
    // </span>
  )
}
