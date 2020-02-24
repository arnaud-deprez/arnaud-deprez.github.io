import React from 'react'
import { render } from '@testing-library/react'
import { TableOfContent } from '../.'

describe('<TableOfContent/>', () => {
  it('renders the table of content', () => {
    const items = [
      {
        url: '#my-requirements',
        title: 'My requirements'
      },
      {
        url: '#what-is-gatsby-',
        title: 'What is Gatsby ?',
        items: [
          {
            url: '#why-gatsby-',
            title: 'Why Gatsby ?',
            items: [
              {
                url: '#because',
                title: 'Because'
              },
              {
                url: '#i-got-high',
                title: 'I got high'
              }
            ]
          }
        ]
      },
      {
        url: '#conclusion',
        title: 'Conclusion'
      }
    ]

    const { asFragment } = render(<TableOfContent items={items} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders an empty table of content if items is undefined', () => {
    const { asFragment } = render(<TableOfContent />)
    expect(asFragment()).toMatchSnapshot()
  })
})
