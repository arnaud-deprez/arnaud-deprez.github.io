import React from 'react'
import loadable from '@loadable/component'
import { useInView } from 'react-intersection-observer'

const InternalOriginalIcon = loadable(() => import('./OriginalIconBundle'))

export const OriginalIcon = (props: unknown): JSX.Element => {
  const [ref] = useInView({
    triggerOnce: true,
    rootMargin: '80px 0px',
  })

  return <InternalOriginalIcon {...props} ref={ref} />
}
