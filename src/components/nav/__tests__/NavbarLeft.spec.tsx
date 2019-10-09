import React from 'react'
import { render } from '@testing-library/react'
import { Nav as BootstrapNav } from 'react-bootstrap'
import { NavbarLeft, Nav } from '../'

describe('<NavbarLeft/>', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <NavbarLeft
        author={{
          name: 'Arnaud Deprez',
          jobTitle: 'Technical Architect'
        }}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
  it('renders correctly with children', () => {
    const { asFragment } = render(
      <NavbarLeft
        author={{
          name: 'Arnaud Deprez',
          jobTitle: 'Technical Architect'
        }}
      >
        <Nav>
          <BootstrapNav.Link>Menu 1</BootstrapNav.Link>
          <BootstrapNav.Link>Menu 2</BootstrapNav.Link>
          <BootstrapNav.Link>Menu 3</BootstrapNav.Link>
        </Nav>
      </NavbarLeft>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
