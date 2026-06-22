/*
 * Fetches all branches and deletes all review-branches in github pages
 */
const FS = require('fs');

const TAG = 'cleanup-gh-pages:';

// Directories that should never be removed by cleanup
const PROTECTED_DIRS = ['main'];

const removeOldFromPath = (isTag, data) => {
  const path = `public/${isTag ? 'version' : 'review'}`;
  if (FS.existsSync(path) && data?.length > 0) {
    const dataNames = data.map((item) => item.name);
    const dirsToDelete = FS.readdirSync(path).filter(
      (file) => !PROTECTED_DIRS.includes(file) && !dataNames.includes(file)
    );
    if (dirsToDelete?.length > 0) {
      console.log(
        TAG,
        `Start removing ${isTag ? 'tags' : 'branches'} from gh-pages`
      );
      console.log(TAG, dirsToDelete);
      dirsToDelete.forEach((dir) => {
        FS.rmSync(`${path}/${dir}`, {
          recursive: true,
          force: true
        });
        console.log(TAG, `deleted  ${isTag ? 'tag' : 'branch'} ${dir}`);
      });
      return true;
    } else {
      console.log(TAG, `All ${isTag ? 'tags' : 'branches'} are up to date`);
    }
  }

  return false;
};

module.exports = async ({ github, context }) => {
  const { repo, owner } = context.repo;

  // Use pagination to fetch all branches and tags
  const branches = await github.paginate(github.rest.repos.listBranches, {
    owner,
    repo,
    per_page: 100
  });
  const tags = await github.paginate(github.rest.repos.listTags, {
    owner,
    repo,
    per_page: 100
  });

  return {
    deploy: removeOldFromPath(false, branches) || removeOldFromPath(true, tags)
  };
};
