require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  pathPrefix: `/fdk`,
  siteMetadata: {
    siteTitle: `fdk`,
    siteTitleAlt: `Home | fdk`,
    siteHeadline: `fdk - Tech blog`,
    siteDescription: `My personal tech blog mainly backend focused topics with java and kotlin.`,
    siteUrl: `https://fdk.codes`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/Frederiiiiik`,
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fdk - tech blog`,
        short_name: `fdk`,
        description: `My personal tech blog mainly backend focused topics with java and kotlin.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icon: `./static/apple-touch-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}

