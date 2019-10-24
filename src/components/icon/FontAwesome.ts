import {
  faBars,
  faCode,
  faEnvelope,
  faHeart,
  faPen,
  faRocket,
  faQuoteLeft,
  faQuoteRight,
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
    faPen,
    faRocket,
    faQuoteLeft,
    faQuoteRight,
    faUser,
    faUserGraduate,
    fab
  )
}
