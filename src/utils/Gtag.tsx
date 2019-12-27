export interface Event {
  event: string
  [key: string]: any
}

export const publishEvent = (event: Event) => {
  const dataLayer = window.dataLayer || []
  dataLayer.push(event)
}
