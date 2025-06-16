/*
 * This script is for development it will generate enums for components using illustration e.g. db-card.
 */

import fs from 'node:fs';
import { replaceInFile } from 'replace-in-file';

try {
  const illustrations = fs
    .readdirSync('./node_modules/@db-ui/core/dist/icons/illustrative')
    .map((ill) => ill.replace('db_ic_il_', '').replace('.svg', ''));

  await replaceInFile({
    files:
      './packages/db-ui-elements-stencil/src/components/db-card/db-card.tsx',
    from: '@Prop({ reflect: true }) illustration:',
    to: `@Prop({ reflect: true }) illustration: ${Object.keys(illustrations)
      .map((ill) => `'${ill}'`)
      .join('|')};`
  });

  await replaceInFile({
    files:
      './packages/db-ui-elements-stencil/src/components/db-card/db-card.tsx',
    from: 'illustrationPaths = {};',
    to: `illustrationPaths = ${JSON.stringify(illustrations)};`
  });
} catch (e) {
  console.log(e);
}

run();
