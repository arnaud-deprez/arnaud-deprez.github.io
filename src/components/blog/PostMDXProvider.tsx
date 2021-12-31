import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Link } from 'gatsby'
import Blockquote from './shortcodes/Blockquote'

const shortcodes = { Link, Blockquote }

export default ({ children }) => <MDXProvider components={shortcodes}>{children}</MDXProvider>
