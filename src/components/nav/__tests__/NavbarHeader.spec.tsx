import React from 'react'
import { render } from '@testing-library/react'
import { NavbarHeader } from '..'

describe('<NavbarHeader/>', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <NavbarHeader
        author={{
          name: 'Arnaud Deprez',
          jobTitle: 'Technical Architect'
        }}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
