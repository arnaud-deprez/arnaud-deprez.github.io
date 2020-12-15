import React from 'react'
import './LabelledIcon.scss'

interface InternalLabelledIconProps {
  label: string
  labelAs?: React.ElementType
  labelClassName?: string
  as?: React.ElementType
}

export type LabelledIconProps = React.PropsWithChildren<InternalLabelledIconProps> &
  React.ComponentPropsWithRef<'div'>

// eslint-disable-next-line react/display-name
export const LabelledIcon = React.forwardRef((props: LabelledIconProps, ref) => {
  const {
    children,
    label,
    labelAs: LabelAs = 'span',
    as: As = 'div',
    className = 'labelled-icon',
    labelClassName,
    ...rest
  } = props
  return (
    <As className={className} {...rest} ref={ref}>
      {children}
      <LabelAs className={labelClassName}>{label}</LabelAs>
    </As>
  )
})
