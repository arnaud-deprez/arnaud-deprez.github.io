import React from 'react'
import { render } from '@testing-library/react'
import { TableOfContent } from '../.'

describe('<TableOfContent/>', () => {
  it('renders the table of content', () => {
    const input = [
      {
        value: 'heading 2a',
        depth: 2
      },
      {
        value: 'heading 2b',
        depth: 2
      },
      {
        value: 'heading 2b3a',
        depth: 3
      },
      {
        value: 'heading 2b3b',
        depth: 3
      },
      {
        value: 'heading 2b3a4a',
        depth: 4
      },
      {
        value: 'heading 2c',
        depth: 2
      }
    ]

    const { asFragment } = render(<TableOfContent headings={input} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
