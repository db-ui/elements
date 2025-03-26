/*
 * This script is for development it will generate enums for components using illustration e.g. db-card.
 */

const fs = require('node:fs');
const replace = require('replace-in-file');

try {
  const illustrations = fs
    .readdirSync('./node_modules/@db-ui/core/dist/icons/illustrative')
    .map((ill) => ill.replace('db_ic_il_', '').replace('.svg', ''));

  await replace({
    files:
      './packages/db-ui-elements-stencil/src/components/db-card/db-card.tsx',
    from: '@Prop({ reflect: true }) illustration:',
    to: `@Prop({ reflect: true }) illustration: ${Object.keys(illustrations)
      .map((ill) => `'${ill}'`)
      .join('|')};`
  });

  await replace({
    files:
      './packages/db-ui-elements-stencil/src/components/db-card/db-card.tsx',
    from: 'illustrationPaths = {};',
    to: `illustrationPaths = ${JSON.stringify(illustrations)};`
  });
} catch (e) {
  console.log(e);
}

run();
