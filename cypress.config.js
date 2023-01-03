const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges : false,  //help to not automaticaly run the test after changes save only run when we restart the test
    specPattern : 'cypress/e2e/automation-test-store/*.cy.{js,jsx,ts,tsx}',
    specPattern : 'cypress/e2e/automation-test-store/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
