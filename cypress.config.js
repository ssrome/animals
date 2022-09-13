const { defineConfig } = require("cypress");

module.exports = defineConfig({
  downloadsFolder: "__tests__/downloads",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "__tests__/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "__tests__/support/e2e.{js,jsx,ts,tsx}",
  },
  fixturesFolder: "__tests__/fixtures",
  screenshotsFolder: "__tests__/screenshots",
  screenshotOnRunFailure: false,
  videosFolder: "__tests__/videos",
  watchForFileChanges: true,
});
