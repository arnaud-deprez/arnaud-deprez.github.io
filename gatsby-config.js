/* eslint-disable @typescript-eslint/camelcase */
const gatsbyRemarkPlugins = [
  {
    resolve: `gatsby-remark-table-of-contents`,
    options: {
      exclude: 'Table of Contents',
      tight: true,
      fromHeading: 2,
      toHeading: 6,
      className: 'remark-toc',
    },
  },
  {
    resolve: 'gatsby-remark-autolink-headers',
    options: {
      icon: false,
      removeAccents: true,
    },
  },
  {
    resolve: 'gatsby-remark-smartypants',
    options: {
      dashes: 'oldschool',
    },
  },
  'gatsby-remark-code-titles',
  'gatsby-remark-sub-sup',
  'gatsby-remark-numbered-footnotes',
  {
    resolve: `gatsby-remark-vscode`,
    // All options are optional. Defaults shown here.
    options: {
      theme: 'Dark+ (default dark)', // Read on for list of included themes. Also accepts object and function forms.
      wrapperClassName: '', // Additional class put on 'pre' tag. Also accepts function to set the class dynamically.
      injectStyles: true, // Injects (minimal) additional CSS for layout and scrolling
      extensions: ['toml'], // Third-party extensions providing additional themes and languages
      languageAliases: {
        markup: 'sh',
      }, // Map of custom/unknown language codes to standard/known language codes
      replaceColor: (x) => x, // Function allowing replacement of a theme color with another. Useful for replacing hex colors with CSS variables.
      logLevel: 'warn', // Set to 'info' to debug if something looks wrong
    },
  },
  {
    resolve: 'gatsby-remark-images',
    options: {
      maxWidth: '800px',
      wrapperStyle: 'margin: 2rem auto; border-radius: 0.5em; overflow: hidden;',
      disableBgImageOnAlpha: true,
      withWebp: true,
    },
  },
  {
    resolve: 'gatsby-remark-copy-linked-files',
  },
  {
    resolve: 'gatsby-remark-emoji',
    options: {
      // default emojiConversion --> shortnameToUnicode
      emojiConversion: 'shortnameToUnicode',
      // when true, matches ASCII characters (in unicodeToImage and shortnameToImage)
      // e.g. ;) --> 😉
      ascii: true,
    },
  },
]

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://arnaud-deprez.powple.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'

const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL
const title = 'Arnaud Deprez'
const longName = title
const description =
  'Technical Blog of Arnaud Deprez, a Technical Architect consultant and owner of Powple who shares his experience about technical stuff'

module.exports = {
  siteMetadata: {
    title,
    description,
    copyright: '© 2020 Arnaud Deprez',
    siteUrl,
    author: {
      name: 'Arnaud Deprez',
      jobTitle: 'Technical Architect - Software Engineer',
      email: 'arnaudeprez@gmail.com',
      linkedin: 'https://linkedin.com/in/deprezarnaud',
      twitter: 'https://twitter.com/arnaudeprez',
      github: 'https://github.com/arnaud-deprez',
    },
    repository: 'https://github.com/arnaud-deprez/arnaud-deprez.github.io',
    disqusShortName: 'arnaud-deprez-powple',
  },
  plugins: [
    'gatsby-plugin-loadable-components-ssr',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-T9R8GX4',
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-typegen',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#ff5700',
        showSpinner: false,
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /svg-icons/,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins,
        remarkPlugins: [require('remark-emoji'), [require('remark-abbr'), { expandFirst: true }]],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-lunr',
    //   options: {
    //     languages: [
    //       {
    //         name: 'en',
    //         filterNodes: node => !node.frontmatter || node.frontmatter.draft !== true,
    //         customEntries: [
    //           {
    //             title: 'Another Page',
    //             content: 'Welcome to page 2',
    //             path: '/another-page/'
    //           }
    //         ]
    //       }
    //     ],
    //     fields: [
    //       { name: 'title', store: true, attributes: { boost: 20 } },
    //       { name: 'path', store: true },
    //       { name: 'content' },
    //       { name: 'tags' }
    //     ],
    //     resolvers: {
    //       Mdx: {
    //         title: node => node.frontmatter.title,
    //         path: node => node.frontmatter.path,
    //         content: node => node.rawBody,
    //         tags: node => node.frontmatter.tags
    //       }
    //     }
    //   }
    // },
    {
      resolve: 'gatsby-plugin-feed-mdx',
      options: {
        feeds: [
          {
            title: 'Feed',
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(({ node }) => {
                return {
                  ...node.frontmatter,
                  path: node.fields.slug,
                  description: node.excerpt,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ 'content:encoded': node.html }],
                }
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { 
                    frontmatter: { 
                      draft: { ne: true } },
                      fields: { slug: { glob: "/blog/**" }
                    }
                  }
                ) {
                  edges {
                    node {
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                      }
                      excerpt
                      html
                    }
                  }
                }
              }
            `,
            output: 'rss.xml',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: longName,
        short_name: title,
        description,
        lang: 'en',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#D77D4B',
        display: 'minimal-ui',
        icon: './content/profile.png',
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/contact/thanks', '/blog/tags/*'],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*' }],
          },
        },
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
