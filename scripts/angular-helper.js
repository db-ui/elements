/*
 * This script is a workaround for unstable angular-output target.
 * It fixes some issues made by code generation from stencil.
 */

const replace = require('replace-in-file');
const fs = require('node:fs');

const registerOnChange = {
  files: './projects/lib/src/number-value-accessor.ts',
  from: 'registerOnChange',
  to: 'override registerOnChange'
};

const writeValue = {
  files: './projects/lib/src/boolean-value-accessor.ts',
  from: 'writeValue',
  to: 'override writeValue'
};
const eventDetail = {
  files: './projects/lib/src/boolean-value-accessor.ts',
  from: '$event.target.checked',
  to: '$event.detail.target.checked'
};

const textAccessorImport = {
  files: './projects/lib/src/text-value-accessor.ts',
  from: "import { Directive, ElementRef } from '@angular/core';",
  to: "import { Directive, ElementRef, HostListener } from '@angular/core';"
};

const textAccessorHostListener = {
  files: './projects/lib/src/text-value-accessor.ts',
  from:
    'export class TextValueAccessor extends ValueAccessor {\n' +
    '  constructor(el: ElementRef) {\n' +
    '    super(el);\n' +
    '  }\n' +
    '}',
  to:
    'export class TextValueAccessor extends ValueAccessor {\n' +
    '  constructor(el: ElementRef) {\n' +
    '    super(el);\n' +
    '  }\n' +
    "  @HostListener('dbChange', ['$event'])\n" +
    '  listenForValueChange(event: any) {\n' +
    "    let value: any = '';\n" +
    "    if (event?.target.tagName.toLowerCase() === 'db-pagination') {\n" +
    '      value = parseInt(event?.detail?.target.innerText, 10);\n' +
    '    } else if (event?.detail?.target?.value?.length > 0) {\n' +
    '      value = event?.detail?.target?.value;\n' +
    '    } else if (\n' +
    '      event?.detail?.target?.checked &&\n' +
    '      event?.target?.textContent?.length > 0\n' +
    '    ) {\n' +
    '      value = event?.target?.textContent;\n' +
    '    }\n' +
    '    this.handleChangeEvent(value);\n' +
    '  }\n' +
    '}'
};

const directive = {
  files: './projects/lib/src/value-accessor.ts',
  from: '@Directive({})',
  to: '@Directive({selector:"extend"})'
};

const shouldOverride = (path) => {
  return (
    fs.existsSync(path) &&
    !fs.readFileSync(path).toString().includes('override')
  );
};

const run = async () => {
  try {
    if (shouldOverride('./projects/lib/src/boolean-value-accessor.ts')) {
      await replace(writeValue);
      await replace(eventDetail);
    }
    if (shouldOverride('./projects/lib/src/text-value-accessor.ts')) {
      await replace(textAccessorHostListener);
      await replace(textAccessorImport);
    }
    if (shouldOverride('./projects/lib/src/number-value-accessor.ts')) {
      await replace(registerOnChange);
    }
    await replace(directive);
  } catch (error) {
    console.error('Error occurred:', error);
  }
};

run();
