// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Global Setup - run before each test
beforeEach(() => {
  // Add any global setup here, for example, logging in before each test.
  // Example: Cypress commands, visiting a common URL, etc.
  // Cypress visit or custom commands can go here.
  cy.visit('/')
});

// Error Handling - prevents Cypress from failing tests on uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
  // You can log the error if you want to debug.
  console.error('Uncaught exception:', err);
  
  // Returning false prevents Cypress from failing the test
  return false;
});
