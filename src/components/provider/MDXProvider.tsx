import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Link from '../link/Link'
import Blockquote from '../text/Blockquote'
import Tip from '../text/Tip'

const shortcodes = { a: Link, Link, Blockquote, Tip }

export default ({ children }) => <MDXProvider components={shortcodes}>{children}</MDXProvider>
