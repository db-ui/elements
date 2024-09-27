import { Config } from '@stencil/core';
import {
  angularOutputTarget,
  ValueAccessorConfig
} from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import {
  ComponentModelConfig,
  vueOutputTarget
} from '@stencil/vue-output-target';
import { sass } from '@stencil/sass';
import * as fs from 'fs';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['db-input', 'db-textarea', 'db-radio', 'db-pagination'],
    event: 'dbChange',
    targetAttr: 'value',
    type: 'text'
  },
  {
    elementSelectors: ['db-checkbox', 'db-toggle'],
    event: 'dbChange',
    targetAttr: 'checked',
    type: 'boolean'
  },
  {
    elementSelectors: ['db-select'],
    event: 'dbChange',
    targetAttr: 'value',
    type: 'select'
  }
];

const vueComponentModels: ComponentModelConfig[] = [
  {
    elements: ['db-input', 'db-select', 'db-radio', 'db-textarea'],
    event: 'dbChange',
    targetAttr: 'value'
  },
  {
    elements: ['db-checkbox', 'db-toggle'],
    event: 'dbChange',
    targetAttr: 'checked'
  },
  {
    elements: ['db-pagination'],
    event: 'dbChange',
    targetAttr: 'currentpage'
  }
];

// Add new theme here if there are others inside DB UI Core
const validThemes = ['enterprise'];

const getTheme = () => {
  return process.argv.find((arg) => validThemes.includes(arg)) || '';
};

const isNotWatching = (): boolean => {
  return !process.argv.find((arg) => arg.includes('watch'));
};

const coreInPackageModules = (): boolean => {
  return fs.existsSync('./node_modules/@db-ui/core');
};

const getSassPath = (): string => {
  return coreInPackageModules() ? '.' : '../..';
};
const getWWWPath = (): string => {
  return coreInPackageModules() ? '..' : '../../..';
};

export const config: Config = {
  namespace: 'db-ui-elements',
  taskQueue: 'async',
  hashFileNames: isNotWatching(),
  outputTargets: [
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'single-export-module'
    },
    angularOutputTarget({
      componentCorePackage: '@db-ui/elements/dist',
      directivesProxyFile:
        '../db-ui-elements-angular/projects/lib/src/components.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
      outputType: 'standalone'
    }),
    reactOutputTarget({
      componentCorePackage: '@db-ui/elements',
      proxiesFile: '../db-ui-elements-react/src/components.ts',
      includeDefineCustomElements: true
    }),
    vueOutputTarget({
      componentCorePackage: '@db-ui/elements',
      proxiesFile: '../db-ui-elements-vue/src/components.ts',
      componentModels: vueComponentModels,
      includeDefineCustomElements: true,
      includePolyfills: true
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      copy: [
        {
          src: `./assets`,
          dest: 'assets'
        },
        {
          src: `${getWWWPath()}/node_modules/@db-ui/core/dist/fonts`,
          dest: 'fonts'
        },
        {
          src: `${getWWWPath()}/node_modules/@db-ui/core/dist/icons`,
          dest: 'icons'
        },
        {
          src: `${getWWWPath()}/node_modules/@db-ui/core/dist/images`,
          dest: 'images'
        },
        {
          src: `${getWWWPath()}/node_modules/@db-ui/core/dist/js`,
          dest: 'js'
        },
        {
          src: `${getWWWPath()}/node_modules/@db-ui/core/dist/css${
            getTheme() ? '/' + getTheme() : ''
          }/db-ui-core.vars.css`,
          dest: 'css/db-ui-core.vars.css'
        },
        {
          src: '../../../node_modules/iframe-resizer/js/iframeResizer.contentWindow.js',
          dest: 'js/iframeresizer.contentwindow.js'
        }
      ],
      serviceWorker: null // disable service workers
    },
    {
      type: 'docs-vscode',
      file: 'custom-elements.json'
    }
  ],
  testing: {
    /**
     * Gitlab CI doesn't allow sandbox, therefor this parameters must be passed to your Headless Chrome
     * before it can run your tests
     */
    browserArgs: ['--no-sandbox', '--disable-setuid-sandbox']
  },
  plugins: [
    sass({
      includePaths: [
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/00-base/colors/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/00-base/icons/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/00-base/type/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/01-elements/buttons/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/01-elements/checkbox/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/01-elements/chips/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/01-elements/headline/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/01-elements/image/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/01-elements/input/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/01-elements/link/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/01-elements/logo/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/01-elements/progress/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/01-elements/radio/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/01-elements/select/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/01-elements/tags/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/01-elements/textarea/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/01-elements/toggle/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/01-elements/video/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/02-components/cards/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/02-components/brand/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/02-components/breadcrumb/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/02-components/dropdown/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/02-components/accordion/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/02-components/language-switcher/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/02-components/link-list/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/02-components/mainnavigation/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/02-components/metanavigation/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/02-components/notifications/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/02-components/overflow-menu/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/02-components/pagination/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/02-components/sidenavi/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/02-components/tab-bar/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/02-components/table/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/03-areas/00-header/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/sources/_patterns/03-areas/03-footer/${getTheme()}`,
        `${getSassPath()}/node_modules/@db-ui/core/dist/css/${getTheme()}`,
        `${getSassPath()}/node_modules/`
      ]
    })
  ],
  extras: {
    enableImportInjection: true
  },
  buildEs5: true
};
