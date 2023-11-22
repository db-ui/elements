import { dirname, join } from 'node:path';
import type { StorybookConfig } from '@storybook/builder-vite';
const { mergeConfig } = require('vite');

const config: StorybookConfig = {
  stories: ['../packages/db-ui-elements-stencil/src'],
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
    getAbsolutePath('@storybook/addon-controls'),
    getAbsolutePath('@storybook/addon-mdx-gfm')
  ],
  staticDirs: ['../packages/db-ui-elements-stencil/www'],
  features: {
    // make storybook composable by building and providing the stories.json file
    buildStoriesJson: true
  },
  babel: async (options) => ({
    ...options,
    plugins: ['istanbul']
  }),
  framework: {
    name: getAbsolutePath('@storybook/web-components-vite'),
    options: {}
  },
  docs: {
    autodocs: true
  },
  core: {},
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      cacheDir: 'node_modules/.cache'
    });
  }
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
