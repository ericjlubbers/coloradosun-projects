module.exports = {
  pathPrefix: "/gatsby-react-bootstrap-starter",
  siteMetadata: {
    title: `The Colorado Sun`,
    description: `A starter that includes react-bootstrap and react-icons, along with SASS compilation.`,
    author: `Billy Jacoby`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-react-bootstrap`,
        short_name: `react-bootstrap`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Libre Franklin:300,400,700,800,900', 'Martel:300,400,700,800,900', 'IBM Plex Mono', 'Martel Sans']
        }
      }
    },
    {
      resolve: `gatsby-source-rest-api`,
      options: {
        endpoints: [
          "https://api.sheety.co/coloradosun/outsideMoney/tvAds", "https://api.sheety.co/coloradosun/outsideMoney/fecOutside", "https://api.sheety.co/coloradosun/outsideMoney/groupsOverview", "https://api.sheety.co/coloradosun/outsideMoney/stateIec", "https://api.sheety.co/coloradosun/outsideMoney/messages"// put your endpoint URL here!
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
