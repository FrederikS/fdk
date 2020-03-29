const AboutPage = require.resolve('./src/components/about.tsx')

exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const { createPage } = actions

  createPage({
    path: '/about',
    component: AboutPage,
  })
}