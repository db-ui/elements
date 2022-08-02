/*
 * This script copies base snapshots to "All Integration Specs"
 */

const fs = require('fs');
const fse = require('fs-extra');

const outputDir = 'All Integration Specs';

const copyAllFiles = (dirPath) => {
  let files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    if (file !== outputDir) {
      const fullPath = `${dirPath}/${file}`;
      if (fs.statSync(fullPath).isDirectory()) {
        if (file.includes('spec.js')) {
          fse.copySync(
            fullPath,
            './cypress/snapshots/base/All Integration Specs'
          );
        } else {
          copyAllFiles(fullPath);
        }
      }
    }
  });
};

try {
  copyAllFiles('./cypress/snapshots/base');
} catch (e) {
  console.log(e);
  process.exit(1);
}
