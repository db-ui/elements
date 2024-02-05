const execSync = require('child_process').execSync;

const getOutputTargetWorkspace = (showcase) => {
  if (showcase.includes('angular')) {
    return 'ngx-elements';
  }
  if (showcase === 'playground') {
    return 'react-elements';
  }
  if (showcase === 'react') {
    return 'react-elements';
  }
  if (showcase === 'reactwind') {
    return 'react-elements';
  }
  if (showcase === 'vue') {
    return 'v-elements';
  }

  return undefined;
};

const run = () => {
  const arg = process.argv[2];
  if (!arg) {
    console.error('showcase/s is/are missing');
    process.exit(1);
  }
  const withShowcase = process.argv[3];
  let showcases;
  if (arg.includes(',')) {
    showcases = arg.split(',');
  } else {
    showcases = [arg];
  }

  if (showcases.length > 0) {
    console.log(`Start building showcase/s`);
    execSync(`npm run build --workspace=@db-ui/elements`);
    console.log(`All: Created stencil build`);

    for (const showcase of showcases) {
      const outputTargetWorkspace = getOutputTargetWorkspace(showcase);
      console.log(`${showcase}: 1. Create output target:`);
      execSync(`npm run build --workspace=@db-ui/${outputTargetWorkspace}`);

      if (withShowcase) {
        console.log(`${showcase}: 2. Build application:`);
        execSync(`cd showcase/${showcase}-showcase && npm i && npm run build`);

        console.log(`${showcase}: 3. Copy index.html to 404.html as fallback:`);
        execSync(
          `npx --yes cpr showcase/${showcase}-showcase/dist/${showcase}-showcase/index.html showcase/${showcase}-showcase/dist/${showcase}-showcase/404.html`
        );

        console.log(`${showcase}: 4. Move static app to stencil www folder:`);
        execSync(
          `npx --yes node-mv showcase/${showcase}-showcase/dist/${showcase}-showcase packages/db-ui-elements-stencil/www/${showcase}-showcase`
        );
      }
    }
  }
};

run();
