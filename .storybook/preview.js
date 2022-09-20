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
        '01-Layout',
        '02-Navigation',
        '03-Action',
        '04-Data-Display',
        '05-Data-Input',
        '06-Feedback',
        '07-Utility',
        '99-Development'
      ]
    }
  }
};
