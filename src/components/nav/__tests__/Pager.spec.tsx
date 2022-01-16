import React from 'react'
import { render } from '../../../__testutils__/test-utils'
import { Pager } from '..'

describe('<Pager />', () => {
  it('should not render if there is only one page', () => {
    const { asFragment } = render(<Pager prefix="/test" page={1} total={1} />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('should not render previous and first button on page 1', () => {
    const { asFragment } = render(<Pager prefix="/test" page={1} total={10} />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('should not render next and last button on last page', () => {
    const { asFragment } = render(<Pager prefix="/test" page={10} total={10} />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('should render 5 page items with first, previous, next and last button', () => {
    const { asFragment } = render(<Pager prefix="/test" page={5} total={10} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
