const { defineConfig } = require('cypress');
const { configureVisualRegression } = require('cypress-visual-regression');

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: 'junit',
  reporterOptions: {
    mochaFile: './cypress/results/output-[hash].xml'
  },
  experimentalStudio: true,
  viewportWidth: 1920,
  viewportHeight: 1200,
  screenshotsFolder: './cypress/snapshots/actual',
  trashAssetsBeforeRuns: true,
  env: {
    ALWAYS_GENERATE_DIFF: false
  },
  e2e: {
    screenshotsFolder: './cypress/snapshots/actual',
    setupNodeEvents(on, config) {
      configureVisualRegression(on);
    },
    baseUrl: 'http://localhost:6006'
  }
});
