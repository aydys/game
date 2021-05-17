const custom = require('../webpack.config.js');

module.exports = {
  stories: [
    "../src/**/*.stories.tsx"
  ],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    "@storybook/addon-storysource",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null
      }
    }    
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.stories\.tsx$/,
      loaders: [
        {
          loader: require.resolve("@storybook/source-loader"),
          options: { parser: "typescript"}
        }
      ],
      enforce: 'pre'
    });

    return {
      ...config,
      resolve: {
        extensions: custom.resolve.extensions,
        alias: custom.resolve.alias
      },
      module: {
        ...config.module,
        rules: [...config.module.rules, ...custom.module.rules]
      }
    }
  }
}