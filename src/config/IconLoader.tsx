import { faUser, faBlog, faHeart } from '@fortawesome/free-solid-svg-icons'

import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'

export const loadIcons = () => {
  library.add(
    faUser,
    faBlog,
    faHeart,

    // brands
    faTwitter,
    faLinkedin,
    faGithub
  )
}
