require('dotenv').config();

const ChildProcess = require('child_process');

const checkCommitMail = () => {
  console.log('Check COMMIT_MAIL');
  if (!process.env.COMMIT_MAIL) {
    console.error(
      "No COMMIT_MAIL set in .env, please look at the file '.env.template'"
    );
    process.exit(1);
  }
  const currentMail = ChildProcess.execSync('git config user.email')
    .toString()
    .trim()
    .toLowerCase();
  const commitMail = process.env.COMMIT_MAIL.trim().toLowerCase();
  if (currentMail !== commitMail) {
    console.error(`currentMail: ${currentMail} !== initialMail: ${commitMail}`);
    console.error(
      `Please set your commit user mail for this project like: 'git config user.email "${commitMail}"'`
    );
    process.exit(1);
  }
};

checkCommitMail();
