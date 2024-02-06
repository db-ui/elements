const { defineConfig } = require('cypress');
const { configureVisualRegression } = require('cypress-visual-regression');
const { unlinkSync } = require('node:fs');

module.exports = defineConfig({
  chromeWebSecurity: false,
  experimentalStudio: true,
  viewportWidth: 1920,
  viewportHeight: 1200,
  screenshotsFolder: './cypress/snapshots/actual',
  trashAssetsBeforeRuns: true,
  video: true,
  videoCompression: false,
  env: {
    ALWAYS_GENERATE_DIFF: false
  },
  e2e: {
    screenshotsFolder: './cypress/snapshots/actual',
    setupNodeEvents(on, config) {
      configureVisualRegression(on);
      on('after:spec', (spec, results) => {
        if (results && results.video) {
          // Do we have failures for any retry attempts?
          const failures = results.tests.some((test) =>
            test.attempts.some((attempt) => attempt.state === 'failed')
          );
          if (!failures) {
            // delete the video if the spec passed and no tests retried
            unlinkSync(results.video);
          }
        }
      });
    },
    baseUrl: 'http://localhost:6006'
  }
});
