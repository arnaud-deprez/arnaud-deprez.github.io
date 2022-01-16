import React from 'react'
import { render } from '@testing-library/react'
import { LocationProvider, createHistory } from '@gatsbyjs/reach-router'

const history = createHistory(window)

const AllTheProviders = ({ children }) => {
  return <LocationProvider history={history}>{children}</LocationProvider>
}

const customRender = (ui, options = {}) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
