import React, { useState, useEffect } from 'react'

export const useIsClient = () => {
  const [isClient, setClient] = useState(false)
  const key = isClient ? 'client' : 'server'

  useEffect(() => {
    setClient(true)
  }, [])

  return { isClient, key }
}

export interface WithClientOnlyRenderingFn {
  <T>(arg: React.ComponentType<T>): React.ComponentType<T>
}

export const withClientOnlyRendering: WithClientOnlyRenderingFn = (WrappedComponent) => (props) => {
  const { isClient, key } = useIsClient()
  if (!isClient) return null
  return (
    <React.Fragment key={key}>
      <WrappedComponent {...props} />
    </React.Fragment>
  )
}

export default useIsClient
