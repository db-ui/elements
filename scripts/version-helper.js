/*
 * This script is just for the GitHub Actions.
 * It will create a version number for stable releases from the input
 */

const { argv } = require('process');
const [, , version] = argv;
const [semver, prerelease] = version.split('-');
if (prerelease) {
  throw new Error('This seems to be a prerelease - will not publish');
}
console.log(version);
