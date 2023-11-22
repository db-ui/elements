/*
 * This script checks if all components have a cypress test.
 */

const fs = require('fs');
const path = require('path');

const excludeComponents = [
  'development',
  'db-page',
  'general.scss',
  '.DS_Store'
];

const getAllFiles = (dirPath, arrayOfFiles) => {
  let files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, '/', file));
    }
  });

  return arrayOfFiles;
};

try {
  const stencilComponents = fs.readdirSync(
    './packages/db-ui-elements-stencil/src/components'
  );
  const cypressIntegrationsFilePaths = getAllFiles('./e2e/cypress/e2e');

  const noTestComponents = stencilComponents
    .filter(
      (component) =>
        !cypressIntegrationsFilePaths.find((filePath) =>
          filePath.includes(component)
        )
    )
    .filter((component) => !excludeComponents.includes(component))
    .filter((component) => !component.includes('-item'));

  if (noTestComponents.length === 0) {
    process.exit(0);
  } else {
    console.log(
      `Cypress tests are missing for ${JSON.stringify(
        noTestComponents
      )}. Please add them to ./e2e/cypress/e2e or into the excludeComponents array inside ./scripts/cypress-component-check.js.`
    );
    process.exit(1);
  }
} catch (e) {
  console.log(e);
  process.exit(1);
}
