const { defineConfig } = require('cypress');

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
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    baseUrl: 'http://localhost:6006'
  }
});
