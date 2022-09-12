const { defineConfig } = require("cypress");

module.exports = defineConfig({
  downloadsFolder: "tests/downloads",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "tests/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "tests/support/e2e.{js,jsx,ts,tsx}",
  },
  fixturesFolder: "tests/fixtures",
  screenshotsFolder: "tests/screenshots",
  screenshotOnRunFailure: false,
  videosFolder: "tests/videos",
  watchForFileChanges: true,
});
