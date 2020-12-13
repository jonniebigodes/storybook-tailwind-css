const path = require("path");
module.exports = {
  stories: ["../src/How-to.stories.mdx", "../src/components/**/*.stories.js"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    'storybook-addon-mdx-embed'
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            sourceMap: true,
            config: {
              path: "./.storybook/",
            },
          },
        },
      ],
    });

    return config;
  },
};
