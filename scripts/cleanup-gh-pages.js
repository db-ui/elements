/*
 * Fetches all branches and deletes all review-branches in github pages
 */
const fs = require('fs');
const axios = require('axios');

const TAG = 'cleanup-gh-pages:';

const run = () => {
  if (fs.existsSync('public/review')) {
    axios
      .get('https://api.github.com/repos/db-ui/elements/branches')
      .then((res) => {
        const data = res.data;
        if (data?.length > 0) {
          const dirsToDelete = fs
            .readdirSync('public/review')
            .filter((file) => !data.find((branch) => branch.name === file));
          if (dirsToDelete?.length > 0) {
            console.log(TAG, 'Start removing branches from gh-pages');
            console.log(TAG, dirsToDelete);
            dirsToDelete.forEach((dir) => {
              fs.rmSync(`public/review/${dir}`, {
                recursive: true,
                force: true
              });
              console.log(TAG, `deleted branch ${dir}`);
            });
          } else {
            console.log(TAG, 'All branches are up to date');
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
};

run();
