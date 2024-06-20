/*
 * This script is a workaround for unstable vue-output target.
 * It fixes some issues made by code generation from stencil.
 */

const replace = require('replace-in-file');

const vModelFix = {
  files: './src/vue-component-lib/utils.ts',
  from: [
    'el.addEventListener(eventName.toLowerCase(), (e: Event) => {',
    'modelPropValue = (e?.target as any)[modelProp];'
  ],
  to: [
    'el.addEventListener(eventName, (e: any) => {',
    '            if (\n' +
      '              e?.detail?.target?.checked &&\n' +
      '              e?.target?.textContent?.length > 0\n' +
      '            ) {\n' +
      '              modelPropValue = e?.target?.textContent;\n' +
      '            } else if (e?.target.tagName.toLowerCase() === "db-pagination") {\n' +
      '              modelPropValue = e?.detail?.target.innerText\n;' +
      '            }\n' +
      '            else {\n' +
      '              modelPropValue = e?.detail?.target[modelProp];\n' +
      '            }'
  ]
};

const run = async () => {
  try {
    const modelFix = await replace(vModelFix);
    modelFix.forEach((changes) => {
      if (!changes.hasChanged) {
        console.warn(
          'vue-helper: Workaround should have changed the file! ' +
            'Maybe there is a new version for vue-output-target which made this workaround obsolete?'
        );
        process.exit(1);
      }
    });
  } catch (error) {
    console.error('Error occurred:', error);
  }
};

run();
