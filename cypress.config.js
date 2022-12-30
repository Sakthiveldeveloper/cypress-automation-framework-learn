const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges : false,  //help to not automaticaly run the test after changes save only run when we restart the test
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
