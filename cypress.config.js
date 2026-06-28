import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl:'https://naveenautomationlabs.com/opencart/index.php',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  /*env:{
    URL:'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  }*/
});
