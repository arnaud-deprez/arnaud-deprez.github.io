import React from 'react'
import { render } from '@testing-library/react'
import { NavSocialIcons } from '..'

describe('<NavSocialIcons/>', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <NavSocialIcons
        linkedin="https://linkedin.com"
        github="https://github.com"
        twitter="https://twitter.com"
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
