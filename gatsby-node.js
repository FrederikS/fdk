const kebabCase = require(`lodash.kebabcase`);
const AboutPage = require.resolve("./src/components/about.tsx");
const withDefaults = require(`@lekoarts/gatsby-theme-minimal-blog-core/utils/default-options`);

exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const { createPage } = actions;

  createPage({
    path: "/about/",
    component: AboutPage,
  });
};

//needed to override slug with trailing slashes
exports.createResolvers = ({ createResolvers }, themeOptions) => {
  const { basePath } = withDefaults(themeOptions);

  const slugify = (source) => {
    const slug = source.slug ? source.slug : kebabCase(source.title);

    return `/${basePath}/${slug}/`.replace(/\/\/+/g, `/`);
  };

  const resolvers = {
    MdxPost: {
      slug: {
        resolve: (source, args, context, info) => {
          return slugify(source);
        },
      },
    }
  };
  createResolvers(resolvers);
};
