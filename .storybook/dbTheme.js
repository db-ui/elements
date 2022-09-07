import { create } from '@storybook/theming/create';

const TEXT = '#131821';
const GREY = '#FDFDFD';

export default create({
  base: 'light',
  brandTitle: 'DB UI Elements ' + process.env.VERSION,

  colorSecondary: '#EC0016',

  // UI
  // appBorderColor: GREY,
  appBorderRadius: 4,
  appBg: GREY,

  // Typography
  fontBase: '"DB Screen Sans", "Helvetica", "Arial", sans-serif',
  // Text colors
  textColor: TEXT,
  // Toolbar default and active colors
  barTextColor: TEXT,
  // Form colors
  inputBorder: GREY,
  inputTextColor: TEXT,
  inputBorderRadius: 4,

  brandUrl:
    'https://marketingportal.extranet.deutschebahn.com/de/ui-komponenten'
});
