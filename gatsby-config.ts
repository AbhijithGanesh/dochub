import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `IEEE Computer Society VITC Docs`,
    siteUrl: `https://beta.ieeecsvitc.com`,
  },
  graphqlTypegen: false,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
        name: "IEEE Computer Society learning docs",
        start_url: "/",
        theme_color: "#31CE9F",
        background_color: "#262626",
        description: `The application does cool things and makes your life better.`,
        short_name: "Learning portal",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/docs/`, `/`],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `./src/content/`,
      },
    },
  ],
};

export default config;
