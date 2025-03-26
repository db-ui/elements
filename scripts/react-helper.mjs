/*
 * This script is a workaround for unstable react-output target.
 * It fixes some issues made by code generation from stencil.
 */

import { replaceInFile } from 'replace-in-file';

const run = async () => {
  try {
    const modelFix = await replaceInFile({
      files: './src/react-component-lib/createOverlayComponent.tsx',
      from: 'return <Overlay',
      to: '//@ts-ignore\nreturn <Overlay'
    });
    await replaceInFile({
      files: './src/react-component-lib/utils/index.tsx',
      from: 'return React.forwardRef',
      to: '//@ts-ignore\nreturn React.forwardRef'
    });
    modelFix.forEach((changes) => {
      if (!changes.hasChanged) {
        console.warn(
          'react-helper: Workaround should have changed the file! ' +
            'Maybe there is a new version for react-output-target which made this workaround obsolete?'
        );
        process.exit(1);
      }
    });
  } catch (error) {
    console.error('Error occurred:', error);
  }
};

run();
