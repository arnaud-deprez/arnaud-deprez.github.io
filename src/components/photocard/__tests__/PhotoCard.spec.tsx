import React from 'react'
import { render } from '@testing-library/react'
import { PhotoCard } from '../PhotoCard'

describe('<PhotoCard/>', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<PhotoCard name="test" jobTitle="job" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
