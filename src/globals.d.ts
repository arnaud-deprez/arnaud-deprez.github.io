import { Event } from './utils/Gtag'

declare global {
  export interface Window {
    dataLayer: Event[]
  }
}

declare module '*.png'
declare module '*.jpg'
declare module '*.svg'
