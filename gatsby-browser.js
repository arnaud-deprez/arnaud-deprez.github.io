import { loadIcons } from './src/components/icon/FontAwesome'

loadIcons()

export const onClientEntry = async () => {
  // eventually load polyfill for intersection-observer
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`)
  }
}
