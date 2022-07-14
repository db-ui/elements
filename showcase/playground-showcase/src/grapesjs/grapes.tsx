import React, { useEffect } from 'react';
import 'grapesjs/dist/css/grapes.min.css';
// @ts-ignore
import grapesjs from 'grapesjs';
import 'grapesjs-preset-webpage';
import {
  DB_BUTTON,
  DB_CHECKBOX,
  DB_ICON,
  DB_INPUT,
  DB_LINK,
  DB_PROGRESS,
  DB_RADIO,
  DB_SELECT,
  DB_TAG,
  DB_TEXTAREA,
  DB_TOGGLE
} from './blocks/elements';
import './css/db-page.css';
import './css/grapes.css';
import '@db-ui/core/dist/css/enterprise/db-ui-core.css';
import { DB_LINK_LIST, DB_META_NAVIGATION } from './blocks/components';
import { DbBrand, DbFooter, DbHeader, DbPage } from '@db-ui/react-elements';

const blocks = [
  DB_BUTTON,
  DB_INPUT,
  DB_CHECKBOX,
  DB_ICON,
  DB_LINK,
  DB_PROGRESS,
  DB_RADIO,
  DB_SELECT,
  DB_TAG,
  DB_TEXTAREA,
  DB_TOGGLE,
  DB_META_NAVIGATION,
  DB_LINK_LIST
];

export const Grapes = () => {
  useEffect(() => {
    const editor = grapesjs.init({
      container: '#gjs',
      height: '100vh',
      fromElement: true,
      canvas: {
        styles: [
          './enterprise/db-ui-core.css',
          './enterprise/db-ui-core.vars.css',
          './grapes.css',
          './db-page.css'
        ]
      },
      plugins: ['gjs-preset-webpage'],
      pluginsOpts: {
        'gjs-preset-webpage': {
          blocks: [],
          blocksBasicOpts: { blocks: ['column1', 'column2', 'column3'] },
          navbarOpts: false,
          formsOpts: false,
          countdownOpts: false
        }
      }
    });

    blocks.forEach((block) => {
      editor.BlockManager.add(block.key, block.value);
    });
  });

  return (
    <div id="gjs">
      <div id="app" className="grapes-container">
        <DbPage>
          <DbHeader slot="header">
            <DbBrand src="./images/db_logo.svg">DB-UI Elements</DbBrand>
          </DbHeader>
          <div>
            <h1>Playground</h1>
            <span>Pick some components from the right side :)</span>
          </div>

          <DbFooter slot="footer" copyright border />
        </DbPage>
      </div>
    </div>
  );
};

export default Grapes;
