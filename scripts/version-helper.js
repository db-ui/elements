/*
 * This script is just for the GitHub Actions.
 * It will take the version from root package.json
 * and copy it to all libraries before npm publish.
 */

const fs = require('fs');

const run = () => {
  const directory = process.argv[2];
  if (!directory) {
    console.error('directory is missing');
    process.exit(1);
  }

  const rawdata = fs.readFileSync('package.json');
  const packageJson = JSON.parse(rawdata);
  const version = packageJson.version;
  const path = `${directory}/package.json`;
  let libraryVersionFile = fs.readFileSync(path);
  const changeVersionFile = libraryVersionFile
    .toString()
    .replace('0.0.0', version);
  fs.writeFileSync(path, changeVersionFile, 'utf8');
};

run();
