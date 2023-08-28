const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://id.zalo.me/account?continue=https%3A%2F%2Fchat.zalo.me%2F',
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      allureWriter(on, config);
      return config;
    },
  },
});
