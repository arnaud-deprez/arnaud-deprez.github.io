import React from 'react'
import { render } from '@testing-library/react'
import { Nav as BootstrapNav } from 'react-bootstrap'
import { Nav } from '..'

describe('<Nav/>', () => {
  it('render a list of nav items', () => {
    const { asFragment } = render(
      <Nav>
        <BootstrapNav.Link>Menu 1</BootstrapNav.Link>
        <BootstrapNav.Link>Menu 2</BootstrapNav.Link>
        <BootstrapNav.Link>Menu 3</BootstrapNav.Link>
      </Nav>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
