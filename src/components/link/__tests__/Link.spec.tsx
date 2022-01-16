import React from 'react'
import { render } from '../../../__testutils__/test-utils'
import Link from '../Link'
import { Nav } from 'react-bootstrap'

describe('<Link/>', () => {
  it('renders an internal link', () => {
    const { asFragment } = render(<Link href="/foo">Hello</Link>)
    expect(asFragment()).toMatchSnapshot()
  })
  it('renders an external link', () => {
    const { asFragment } = render(<Link href="https://foo.com/bar">Hello</Link>)
    expect(asFragment()).toMatchSnapshot()
  })
  it('renders an external link as Nav.Link', () => {
    const { asFragment } = render(
      <Link href="https://foo.com/bar" as={Nav.Link}>
        Hello
      </Link>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
