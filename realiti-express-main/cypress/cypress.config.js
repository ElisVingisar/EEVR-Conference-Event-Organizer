// cypress.config.js (ESM)
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    supportFile: "cypress/support/e2e.js", // Ensure this is correct
    baseUrl: "http://localhost:3000", // Example base URL if necessary
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
