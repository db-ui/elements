/*
 * This script is just for the GitHub Actions.
 * It will add the dependency for @db-ui/elements to the package.json for publishing.
 */

const fs = require('fs');

const run = () => {
  const directory = process.argv[2];
  if (!directory) {
    console.error('directory is missing');
    process.exit(1);
  }

  let theme;
  if (process.argv.length > 2) {
    theme = process.argv[3];
  }

  const path = `${directory}/package.json`;
  const rawdata = fs.readFileSync(path);
  const packageJson = JSON.parse(rawdata);
  if (!packageJson.dependencies) {
    packageJson.dependencies = {};
  }
  packageJson.dependencies[
    theme ? `@db-ui/elements-${theme}` : '@db-ui/elements'
  ] = `^${packageJson.version}`;
  fs.writeFileSync(path, JSON.stringify(packageJson), 'utf8');
};

run();
