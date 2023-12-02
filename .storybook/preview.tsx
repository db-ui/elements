//enable watch mode for hot deployment during development
import { defineCustomElements } from '@db-ui/elements/dist/esm/loader';
defineCustomElements();

// order the Pages top level
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: { expanded: true, hideNoControlsWarning: true },
  previewTabs: {
    'storybook/docs/panel': { hidden: true },
    canvas: { hidden: true }
  },
  viewMode: 'story',
  options: {
    showToolbar: true,
    storySort: {
      method: 'alphabetical',
      order: [
        '00-Intro',
        ['Welcome', 'Getting Started', 'Frameworks', 'Showcases'],
        '02-Layout',
        '03-Navigation',
        '04-Action',
        '05-Data-Display',
        '06-Data-Input',
        '07-Feedback',
        '08-Utility',
        '20-Legal',
        '99-Development'
      ]
    }
  }
};
