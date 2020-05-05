import {
  faBars,
  faBlog,
  faCalendarAlt,
  faClock,
  faCode,
  faEdit,
  faEnvelope,
  faHeart,
  faLaptopCode,
  faPen,
  faProjectDiagram,
  faRocket,
  faRss,
  faQuoteLeft,
  faQuoteRight,
  faSpaceShuttle,
  faUser,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'

export const loadIcons = () => {
  library.add(
    faBars,
    faBlog,
    faCalendarAlt,
    faClock,
    faCode,
    faEdit,
    faEnvelope,
    faHeart,
    faLaptopCode,
    faPen,
    faProjectDiagram,
    faRocket,
    faRss,
    faQuoteLeft,
    faQuoteRight,
    faSpaceShuttle,
    faUser,
    faUserGraduate,
    fab
  )
}
