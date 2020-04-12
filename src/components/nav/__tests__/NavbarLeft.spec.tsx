import React from 'react'
import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'
import { Nav as BootstrapNav } from 'react-bootstrap'
import { NavbarLeft, Nav } from '..'

jest.mock('gatsby')

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockUseStaticQuery = useStaticQuery as jest.Mock<any, any>

describe('<NavbarLeft/>', () => {
  beforeAll(() => {
    mockUseStaticQuery.mockReturnValue({
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
          rss: undefined,
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
          rss: undefined,
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
