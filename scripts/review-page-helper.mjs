/*
 * This script is a workaround for GitHub pages review.
 */

import { replaceInFile } from 'replace-in-file';

const getFrom = (framework) => {
  if (framework === 'react') {
    return /\/react-showcase/g;
  }
  if (framework === 'vue') {
    return /\/vue-showcase/g;
  }
  if (framework === 'angular') {
    return /\/angular-showcase/g;
  }
  if (framework === 'reactwind') {
    return /\/reactwind-showcase/g;
  }
  if (framework === 'playground') {
    return /\/playground-showcase/g;
  }
  return '';
};

const run = async () => {
  const framework = process.argv[2];
  if (!framework) {
    console.error('framework is missing');
    process.exit(1);
  }
  const reviewPath = process.argv[3];
  if (!reviewPath) {
    console.error('reviewPath is missing');
    process.exit(1);
  }
  try {
    if (framework === 'angular') {
      await replaceInFile({
        files: [
          './public/angular-showcase/index.html',
          './public/angular-showcase/styles.css'
        ],
        from: /url\(/g,
        to: 'url(/angular-showcase/'
      });
    }
    await replaceInFile({
      files: [
        `./public/${framework}-showcase/*.*`,
        `./public/${framework}-showcase/**/*.*`
      ],
      from: getFrom(framework),
      to: reviewPath
    });
  } catch (error) {
    console.error('Error occurred:', error);
    process.exit(1);
  }
};

run();
