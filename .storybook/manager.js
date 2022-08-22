import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: name + 'DB-UI Elements',
    // brandImage: '/static/db_logo.svg',

    colorSecondary: '#EC0016',
    fontBase: '"DB Screen Sans", "Helvetica", "Arial", sans-serif',

    textColor: '#131821',
    appBg: '#FDFDFD'
  })
});
