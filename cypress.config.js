const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'src/tests/E2E/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
    },
  },
});
