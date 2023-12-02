// adapted from https://github.com/microsoft/vscode-jupyter/pull/7987
const { EOL } = require('node:os');
const path = require('node:path');
const fs = require('fs-extra');

/**
 * Fix compilation issues in jsdom files.
 */
function updateJSDomTypeDefinition() {
  var relativePath = path.join('node_modules', '@types', 'jsdom', 'base.d.ts');
  var filePath = path.join('./', relativePath);
  if (!fs.existsSync(filePath)) {
    console.warn(
      "JSdom base.d.ts not found '" +
        filePath +
        "' (Jupyter Extension post install script)"
    );
    return;
  }
  var fileContents = fs.readFileSync(filePath, { encoding: 'utf8' });
  var replacedContents = fileContents.replace(
    /\s*globalThis: DOMWindow;\s*readonly \["Infinity"]: number;\s*readonly \["NaN"]: number;/g,
    [
      'globalThis: DOMWindow;',
      '// @ts-ignore',
      'readonly ["Infinity"]: number;',
      '// @ts-ignore',
      'readonly ["NaN"]: number;'
    ].join(`${EOL}        `)
  );
  if (replacedContents === fileContents) {
    console.warn('JSdom base.d.ts not updated');
    return;
  }
  fs.writeFileSync(filePath, replacedContents);
}

updateJSDomTypeDefinition();
