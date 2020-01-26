export interface Event {
  event: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export const publishEvent = (event: Event) => {
  const dataLayer = window.dataLayer || []
  dataLayer.push(event)
}
