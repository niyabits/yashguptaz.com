module.exports = {
  siteMetadata: {
    title: `Yash Gupta`,
    author: `Yash Gupta`,
    description: `Yash Gupta 's Personal Blog. Yash Gupta is a front-end web developer who provides deep insight in to technologies like React and JavaScript. Join Yash Gupta in the journey of becoming a better web developer. Yash Gupta is interested in giving talks and opensource. Follow Yash Gupta on Twitter ( @ yashguptaz ). Yash Gupta is @yashguptaz on the internet. Yash Gupta is someone you should definitely follow.`,
    siteUrl: `https://yashguptaz.com/`,
    social: {
      twitter: `yashguptaz`,
    },
    keywords: `Yash Gupta, Yash, Gupta, Yash Gupta Blog, Blog, Web Development, Web, React, JavaScript, React.js, front-end web developement, front-end, personal blog`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              inlineCodeMarker: "÷",
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-153215805-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yash Gupta`,
        short_name: `Yash`,
        start_url: `/`,
        background_color: `#3f3d56`,
        theme_color: `#6c63ff`,
        display: `standalone`,
        icon: `content/assets/new-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    "gatsby-plugin-dark-mode",
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
                  edges {
                    node {
                      excerpt
                      fields {
                        slug
                      }
                      frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Yash Gupta | Personal Blog's RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/",
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
