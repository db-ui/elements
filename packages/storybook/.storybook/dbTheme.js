import { create } from '@storybook/theming/create';
import * as DBToken from '@db-ui/base/build/js/tokens.js';

export default create({
  base: 'light',
  brandTitle: 'DB UI Elements ' + (process.env.VERSION || ''),

  colorSecondary: DBToken.DbColorRed500,

  // UI
  appBorderRadius: 4,
  appBg: DBToken.DbColorWhite,

  // Typography
  fontBase: '"DB Screen Sans", "Helvetica", "Arial", sans-serif',
  // Text colors
  textColor: DBToken.DbColorCoolGray800,
  // Toolbar default and active colors
  barTextColor: DBToken.DbColorCoolGray800,
  // Form colors
  inputBorder: DBToken.DbColorWarmGray200,
  inputTextColor: DBToken.DbColorCoolGray800,
  inputBorderRadius: 4,

  brandUrl:
    'https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system/version-2/Components'
});
