import {
  faBars,
  faCode,
  faEnvelope,
  faHeart,
  faLaptopCode,
  faPen,
  faProjectDiagram,
  faRocket,
  faQuoteLeft,
  faQuoteRight,
  faSpaceShuttle,
  faUser,
  faUserGraduate
} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'

export const loadIcons = () => {
  library.add(
    faBars,
    faCode,
    faEnvelope,
    faHeart,
    faLaptopCode,
    faPen,
    faProjectDiagram,
    faRocket,
    faQuoteLeft,
    faQuoteRight,
    faSpaceShuttle,
    faUser,
    faUserGraduate,
    fab
  )
}
