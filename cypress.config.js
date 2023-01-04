const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges : false,  //help to not automaticaly run the test after changes save only run when we restart the test
    specPattern : 'cypress/e2e/*/*.cy.{js,jsx,ts,tsx}', //help to write all  file in Cypress
    specPattern : 'cypress/e2e/*/*.{js,jsx,ts,tsx,feature}',
    // chromeWebSecurity : false, //web sequrity  disable in the chrome only
    // experimentalSessionAndOrigin  :true //help to run origin but v12 remove this
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
