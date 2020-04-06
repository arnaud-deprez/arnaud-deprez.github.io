import React from 'react'
import { render } from '@testing-library/react'
import { NavbarHeader } from '..'

describe('<NavbarHeader/>', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <NavbarHeader
        author={{
          name: 'Arnaud Deprez',
          jobTitle: 'Technical Architect',
          email: undefined,
          linkedin: undefined,
          twitter: undefined,
          github: undefined,
          rss: undefined
        }}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
