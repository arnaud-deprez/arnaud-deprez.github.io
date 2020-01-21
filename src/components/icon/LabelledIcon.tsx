import React from 'react'
import './LabelledIcon.scss'

export interface LabelledIconProps<As extends React.ElementType> {
  label: string
  labelAs?: React.ElementType
  labelClassName?: string
  as?: As
}

export const LabelledIcon = <As extends React.ElementType = 'div'>({
  children,
  label,
  labelAs: LabelAs = 'span',
  as: As = 'div',
  className = 'labelled-icon',
  labelClassName,
  ...rest
}: LabelledIconProps<As> & React.ComponentPropsWithoutRef<As>) => (
  <As className={className} {...rest}>
    {children}
    <LabelAs className={labelClassName}>{label}</LabelAs>
  </As>
)
