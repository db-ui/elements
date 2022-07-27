module.exports = {
  stories: [
    '../packages/db-ui-elements-stencil/src/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        measure: false,
        outline: false
      }
    },
    {
      name: '@storybook/addon-docs',
      options: { transcludeMarkdown: true }
    },
    '@storybook/addon-controls'
  ],
  staticDirs: ['../packages/db-ui-elements-stencil/www'],
  // "Deprecated implicit PostCSS loader" / https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-implicit-postcss-loader
  features: {
    postcss: false
  },
  babel: async (options) => ({
    ...options,
    plugins: ['istanbul']
  }),
  core: {
    builder: 'webpack5'
  }
};
