module.exports = {
  // pathPrefix: "/hosts-dashboard-demo", // TODO: apply on deployment
  plugins: [
    'gatsby-plugin-top-layout',
    'gatsby-plugin-react-helmet',
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-mui-emotion',
  ],
  siteMetadata: {
    title: 'My page',
  },
};
