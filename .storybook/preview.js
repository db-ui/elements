//enable watch mode for hot deployment during development
import { defineCustomElements } from '@db-ui/elements/dist/esm/loader';
defineCustomElements();

// order the Pages top level
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: {
    expanded: true,
    hideNoControlsWarning: true
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Intro',
        ['Welcome', 'Getting Started'],
        'Base',
        ['Colors', 'Color Preview'],
        'Elements',
        'Components',
        'Areas',
        'Development',
        'Other'
      ]
    }
  }
};
