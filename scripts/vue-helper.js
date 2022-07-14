/*
 * This script is a workaround for unstable vue-output target.
 * It fixes some issues made by code generation from stencil.
 */

const replace = require('replace-in-file');
const fs = require('fs');

const vModelFix = {
  files: './src/vue-component-lib/utils.ts',
  from:
    'vnode.el.addEventListener(eventName.toLowerCase(), (e: Event) => {\n' +
    '            modelPropValue = (e?.target as any)[modelProp];',
  to:
    ' vnode.el.addEventListener(eventName, (e: any) => {\n' +
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
};

const modelValueFix = {
  files: './src/vue-component-lib/utils.ts',
  from: 'modelValue: string | boolean',
  to: 'modelValue?: string | boolean'
};

const run = async () => {
  try {
    await replace(vModelFix);
    await replace(modelValueFix);
  } catch (error) {
    console.error('Error occurred:', error);
  }
};

run();
