import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Link from '../link/Link'
import Blockquote from './shortcodes/Blockquote'
import Tip from './shortcodes/Tip'

const shortcodes = { Link, Blockquote, Tip }

export default ({ children }) => <MDXProvider components={shortcodes}>{children}</MDXProvider>
