module.exports = async ({ github, context }, head, base) => {
  try {
    const { repo, owner } = context.repo;
    const result = await github.rest.pulls.create({
      title: 'Auto Update from main',
      owner,
      repo,
      head,
      base,
      body: '(o゜▽゜)o ☆ ☜(ﾟヮﾟ☜)'
    });

    await github.rest.issues.addLabels({
      owner,
      repo,
      issue_number: result.data.number,
      labels: ['automated update']
    });

    return result.data.html_url;
  } catch (e) {
    console.error(e);
  }
  return false;
};
