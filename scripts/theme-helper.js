/*
 * This script is just for the GitHub Actions.
 * It will add the theme to the package.json name for publishing.
 */

const fs = require('fs');

const run = () => {
  const directory = process.argv[2];
  if (!directory) {
    console.error('directory is missing');
    process.exit(1);
  }
  const theme = process.argv[3];
  if (!theme) {
    console.error('theme is missing');
    process.exit(1);
  }

  const path = `${directory}/package.json`;
  const rawdata = fs.readFileSync(path);
  const packageJson = JSON.parse(rawdata);
  packageJson.name = `${packageJson.name}-${theme}`;
  fs.writeFileSync(path, JSON.stringify(packageJson), 'utf8');
};

run();
