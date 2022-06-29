import { Ace } from 'ace-builds';

export const getAceAutocomplete = () => {
  const components = [
    'db-brand',
    'db-breadcrumb',
    'db-button',
    'db-card',
    'db-cards',
    'db-checkbox',
    'db-dropdown',
    'db-expander',
    'db-footer',
    'db-header',
    'db-headline',
    'db-icon',
    'db-image',
    'db-input',
    'db-language-switcher',
    'db-link',
    'db-linklist',
    'db-mainnavigation',
    'db-meta',
    'db-metanavigation',
    'db-notification',
    'db-overflow-menu',
    'db-page',
    'db-pagination',
    'db-progress',
    'db-radio',
    'db-select',
    'db-sidenavi',
    'db-tab',
    'db-tab-bar',
    'db-table',
    'db-tag',
    'db-textarea',
    'db-toggle'
  ];
  return {
    getCompletions: (
      _editor: Ace.Editor,
      _session: Ace.EditSession,
      _pos: Ace.Point,
      _prefix: string,
      callback: Ace.CompleterCallback
    ): void => {
      callback(
        null,
        components.map(
          (comp) =>
            ({
              caption: comp,
              value: comp,
              meta: 'db-ui'
            } as Ace.Completion)
        )
      );
    }
  };
};
