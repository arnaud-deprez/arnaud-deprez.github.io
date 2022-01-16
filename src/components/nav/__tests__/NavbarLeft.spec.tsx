import React from 'react'
import { render } from '../../../__testutils__/test-utils'
import { useStaticQuery } from 'gatsby'
import { Nav as BootstrapNav } from 'react-bootstrap'
import { NavbarLeft, Nav } from '..'
import { mocked } from 'jest-mock'

const useStaticQueryMocked = mocked(useStaticQuery, true)

describe('<NavbarLeft/>', () => {
  beforeAll(() => {
    useStaticQueryMocked.mockReturnValue({
      file: {
        childImageSharp: {
          resize: {
            src: 'profile.png',
          },
        },
      },
    })
  })
  it('renders correctly', () => {
    const { asFragment } = render(
      <NavbarLeft
        author={{
          name: 'Arnaud Deprez',
          jobTitle: 'Technical Architect',
          email: undefined,
          linkedin: undefined,
          twitter: undefined,
          github: undefined,
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
          jobTitle: 'Technical Architect',
          email: undefined,
          linkedin: undefined,
          twitter: undefined,
          github: undefined,
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
