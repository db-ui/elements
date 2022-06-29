/*
 * This script is for development it will generate enums for components using illustration e.g. db-card.
 */

const fs = require('fs');
const replace = require('replace-in-file');

try {
  const illustrations = fs
    .readdirSync('./node_modules/@db-ui/core/dist/images/icons/illustration')
    .map((ill) => ill.replace('ic-db-il_puls_', '').replace('.svg', ''));

  replace({
    files:
      './packages/db-ui-elements-stencil/src/components/db-card/db-card.tsx',
    from: '@Prop({ reflect: true }) illustration:',
    to: `@Prop({ reflect: true }) illustration: ${illustrations
      .map((ill) => `'${ill}'`)
      .join('|')} |`
  });
} catch (e) {
  console.log(e);
}
