/// <reference types = "cypress"/>
import 'cypress-file-upload'

function generateUniqueEmail() {
    const timestamp = Date.now(); // Get current timestamp
    return `testuser${timestamp}@example.com`; // Create a unique email
  }

describe('Register Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/register'); // Adjust the path based on your routing
      cy.wait(1000);
      cy.url().should('include', '/register'); // Check the URL is correct
      cy.get('h2').should('contain', 'Register as a Speaker!');
    });

    it('should visit the register page and load successfully', () => {
        cy.visit('http://localhost:3000/register'); // Visit the register page
        cy.url().should('include', '/register'); // Assert that the URL is correct
        cy.get('h2').should('contain', 'Register as a Speaker!'); // Check for the header text
      });
  
    it('should display the registration form', () => {
      cy.get('h2').contains('Register as a Speaker!'); // Check for the main heading
      cy.get('input[name="name"]').should('be.visible');
      cy.get('input[name="email"]').should('be.visible');
      cy.get('input[name="talkTitle"]').should('be.visible');
      cy.get('input[type="file"][name="picture"]').should('be.visible');
      cy.get('input[type="file"][name="slides"]').should('be.visible');
      cy.get('button[type="submit"]').contains('Register');
    });

  it('should show validation error when required fields are empty', () => {
    cy.get('button[type="submit"]').click(); // Attempt to submit without filling in required fields
  
    // Check if submission fails
    cy.get('p').contains('Form submission failed. Please try again.').should('not.exist');
  });

  it('should successfully submit the form', () => {
  const uniqueEmail = generateUniqueEmail();

  // Fill out the form
  cy.get('input[name="name"]').type('Marlene Ibrus');
  cy.get('input[name="email"]').type(uniqueEmail);
  cy.get('textarea[name="info"]').type('I like my cheese drippy bruh>:3');
  cy.get('input[name="talkTitle"]').type('Mjäu?');

  // Ensure the input type is datetime-local; format is YYYY-MM-DDTHH:MM
  cy.get('input[name="arrivalDate"]').type('2024-10-23T07:39'); 
  cy.get('input[name="departureDate"]').type('2024-10-24T07:39');

  // Simulate file upload (use a test file you have in your fixtures)
  cy.fixture('example.jpg').then(fileContent => {
    cy.get('input[name="picture"]').attachFile({ fileContent, fileName: 'example.jpg', mimeType: 'image/jpeg' });
  });

  cy.fixture('presentation.pdf').then(fileContent => {
    cy.get('input[name="slides"]').attachFile({ fileContent, fileName: 'presentation.pdf', mimeType: 'application/pdf' });
  });

  cy.get('button[type="submit"]').click(); // Submit the form

  // Check for success message
  cy.get('p').contains('Form submission successful!').should('be.visible');
});

  it('should show warning message if slides are not uploaded before the deadline', () => {
    const uniqueEmail = generateUniqueEmail();
    // Fill out the form without uploading slides
    cy.get('input[name="name"]').type('Marlene Ibrus');
    cy.get('input[name="email"]').type(uniqueEmail);
    cy.get('input[name="talkTitle"]').type('Mjäu?');
    cy.get('input[name="arrivalDate"]').type('2024-10-23T07:39');
    cy.get('input[name="departureDate"]').type('2024-10-24T07:39');
  
    // Submit the form
    cy.get('button[type="submit"]').click();
  
    // Check for the warning message
    cy.get('p').contains('Please upload your slides before the deadline').should('be.visible');
  });

  it('should allow uploading a picture and slides', () => {
    cy.fixture('example.jpg').then(fileContent => {
      cy.get('input[name="picture"]').attachFile({ fileContent, fileName: 'example.jpg', mimeType: 'image/jpeg' });
    });
  
    cy.fixture('presentation.pdf').then(fileContent => {
      cy.get('input[name="slides"]').attachFile({ fileContent, fileName: 'presentation.pdf', mimeType: 'application/pdf' });
    });
  
    // Assert that the files have been uploaded
    cy.get('input[name="picture"]').should('have.value', 'C:\\fakepath\\example.jpg'); // Verify the input shows the file name
    cy.get('input[name="slides"]').should('have.value', 'C:\\fakepath\\presentation.pdf');
  });

  it('should display the correct submission status message', () => {
    const uniqueEmail = generateUniqueEmail();
    // Fill out the form correctly
    cy.get('input[name="name"]').type('Marlene Ibrus');
    cy.get('input[name="email"]').type(uniqueEmail);
    cy.get('input[name="talkTitle"]').type('Mjäu?');
    
    cy.get('input[name="arrivalDate"]').type('2024-10-23T07:39');
    cy.get('input[name="departureDate"]').type('2024-10-24T07:39');
  
    // Submit the form
    cy.get('button[type="submit"]').click();
  
    // Check for success message
    cy.get('p').contains('Form submission successful!').should('be.visible');
  });

  it('should display an error message on submission failure', () => {
    // Assuming you have a way to trigger a failure, such as a mock API failure
    cy.intercept('POST', '/api/register', {
      statusCode: 500,
      body: { success: false },
    });
    const uniqueEmail = generateUniqueEmail();
  
    // Fill out the form
    cy.get('input[name="name"]').type('Marlene Ibrus');
    cy.get('input[name="email"]').type(uniqueEmail);
    cy.get('input[name="talkTitle"]').type('Mjäu?');
    cy.get('input[name="arrivalDate"]').type('2024-10-23T07:39'); // Use appropriate date format
    cy.get('input[name="departureDate"]').type('2024-10-24T07:39');
  
    // Submit the form
    cy.get('button[type="submit"]').click();
  
    // Check for error message
    cy.get('[data-cy=submission-error]').should('be.visible').and('contain', 'Form submission failed. Please try again.');
  });
});