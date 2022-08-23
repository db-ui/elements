module.exports = {
  stories: [
    '../packages/db-ui-elements-stencil/src/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    'storybook-zeplin/register',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-docs',
      options: { transcludeMarkdown: true }
    }
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
