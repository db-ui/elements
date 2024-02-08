import { dirname, join } from 'node:path';
import remarkGfm from 'remark-gfm';

const config = {
  stories: [
    '../../db-ui-elements-stencil/src/**/*.stories.@(js|jsx|ts|tsx|mdx)'
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
      options: {
        transcludeMarkdown: true
      }
    },
    {
      name: '@storybook/addon-controls'
    }
  ],

  staticDirs: ['../../db-ui-elements-stencil/www'],

  features: {
    // "Deprecated implicit PostCSS loader" / https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-implicit-postcss-loader
    postcss: false,
    // make storybook composable by building and providing the stories.json file
    buildStoriesJson: true
  },
  framework: {
    name: '@storybook/web-components-vite',
    options: {}
  },

  docs: {
    autodocs: true
  }
};

export default config;
