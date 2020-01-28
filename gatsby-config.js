/* eslint-disable @typescript-eslint/camelcase */
const gatsbyRemarkPlugins = [
  {
    resolve: 'gatsby-remark-autolink-headers',
    options: {
      icon: false
    }
  },
  {
    resolve: 'gatsby-remark-smartypants',
    options: {
      dashes: 'oldschool'
    }
  },
  {
    resolve: 'gatsby-remark-prismjs',
    options: {
      classPrefix: 'language-',
      inlineCodeMarker: {
        tsx: 'tsx'
      },
      aliases: {}
    }
  },
  {
    resolve: 'gatsby-remark-images',
    options: {
      maxWidth: 1200,
      wrapperStyle: 'margin-bottom: 1rem;'
    }
  },
  {
    resolve: 'gatsby-remark-copy-linked-files',
    options: {}
  }
]

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://arnaud-deprez.powple.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
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
      rss: ''
    }
  },
  plugins: [
    /* {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-T9R8GX4',
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' }
      }
    }, */
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'content',
        path: `${__dirname}/content`
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#ff5700',
        showSpinner: false
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          ...gatsbyRemarkPlugins,
          {
            resolve: 'gatsby-remark-emoji',
            options: {}
          }
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins,
        remarkPlugins: [require('remark-emoji')]
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /svg-icons/
      }
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
      resolve: 'gatsby-plugin-feed',
      options: {
        /**
         * no need to specify the other options, since they will be merged with this
         */
        feeds: [
          {
            title: 'Feed',
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(({ node }) => {
                return {
                  ...node.frontmatter,
                  description: node.excerpt,
                  url: site.siteMetadata.siteUrl + node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + node.frontmatter.path,
                  custom_elements: [{ 'content:encoded': node.html }]
                }
              })
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { 
                    frontmatter: { 
                      draft: { ne: true } 
                      title: { ne: "About" } 
                    } 
                  }
                ) {
                  edges {
                    node {
                      frontmatter {
                        path
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
            output: 'rss.xml'
          }
        ]
      }
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
        icon: './content/profile.png'
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/contact/thanks']
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }]
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*' }]
          }
        }
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify'
  ]
}
