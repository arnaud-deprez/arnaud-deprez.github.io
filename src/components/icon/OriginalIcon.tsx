import React from 'react'
import { useInView } from 'react-intersection-observer'
import InternalOriginalIcon, { OriginalIconProps } from './OriginalIconBundle'

export const OriginalIcon = (props: OriginalIconProps): JSX.Element => {
  const [ref] = useInView({
    triggerOnce: true,
    rootMargin: '80px 0px',
  })

  return (
    <span ref={ref}>
      <InternalOriginalIcon {...props} />
    </span>
  )
}
