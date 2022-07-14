/*
 * This script checks if all components are inside the angular db-ui-elements-module.ts.
 */

const fs = require('fs');

const excludeComponents = ['development', 'general.scss', '.DS_Store'];

try {
  const stencilComponents = fs.readdirSync(
    './packages/db-ui-elements-stencil/src/components'
  );
  const elementsModuleString = fs
    .readFileSync(
      './packages/db-ui-elements-angular/projects/lib/src/db-ui-elements-module.ts'
    )
    .toString()
    .toLowerCase();

  const noTestComponents = stencilComponents
    .filter((component) => !excludeComponents.includes(component))
    .filter(
      (component) => !elementsModuleString.includes(component.replace(/-/g, ''))
    );

  if (noTestComponents.length === 0) {
    process.exit(0);
  } else {
    console.log(
      `Components are missing for angular output target: ${JSON.stringify(
        noTestComponents
      )}. Please add them to ./packages/db-ui-elements-angular/projects/lib/src/db-ui-elements-module.ts or into the excludeComponents array inside ./scripts/angular-module-component-check.js.`
    );
    process.exit(1);
  }
} catch (e) {
  console.log(e);
  process.exit(1);
}
