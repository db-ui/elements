import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const { version } = require('../package.json');

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: name + 'DB-UI Elements ' + version,
    // brandImage: '/static/db_logo.svg',

    colorSecondary: '#EC0016',
    fontBase: '"DB Screen Sans", "Helvetica", "Arial", sans-serif',

    textColor: '#131821',
    appBg: '#FDFDFD'
  })
});
