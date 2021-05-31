module.exports = {

  siteMetadata: {
    title: `CodeBeach`,
    description: `AKRの技術ブログ。主にフロントエンドについての学習記録です。`,
    author: `AKR`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    // `gatsby-plugin-sitemap`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/contents/blog`,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,

        plugins: [
          `gatsby-remark-prismjs-title`,
          `gatsby-remark-prismjs`,

          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
            }
          },

          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `30`,
              icon: false,
              className: `custom-class`,
              maintainCase: false,
            }
          },

          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `noopener noreferrer`,
            },
          }
        ]
      }
    },

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [ `G-E9M612NTWW` ],
        pluginConfig: {
          head: true,
        },
      },
    },

  ],
};
