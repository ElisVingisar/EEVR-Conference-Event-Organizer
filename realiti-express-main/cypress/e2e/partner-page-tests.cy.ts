/// <reference types = "cypress"/>  

describe('Partner with Us Form', () => {
    beforeEach(()=> {
        cy.visit('http://localhost:3000/partners')
    })


    it('should load the partners page', () => {
        // Check that the title is present
        cy.contains('Partner with Us').should('be.visible');
        cy.contains('Explore collaboration opportunities').should('be.visible');
    });


    it('should contain different packages', () => {
      
      cy.contains('Choose this option').should('not.exist');
      cy.contains('Unselect').should('not.exist');

      // Main Sponsorship
      cy.contains('Logo in the most prominent position').should('not.exist');
  
      cy.contains('Main Sponsorship').click();
      cy.contains('Logo in the most prominent position').should('be.visible');
  
      cy.contains('Main Sponsorship').click();
      cy.contains('Logo in the most prominent position').should('not.exist');
  
      // Theme Block Sponsorship
      cy.contains('Logo on all digital marketing materials').should('not.exist');

      cy.contains('Theme Block Sponsorship').click();
      cy.contains('Logo on all digital marketing materials').should('be.visible');
  
      cy.contains('Theme Block Sponsorship').click();
      cy.contains('Logo on all digital marketing materials').should('not.exist');
  
      // Custom Sponsorship
      cy.contains('We are open to discussing tailored sponsorship conditions').should('not.exist');

      cy.contains('Custom Sponsorship').click();
      cy.contains('We are open to discussing tailored sponsorship conditions').should('be.visible');
  
      cy.contains('Custom Sponsorship').click();
      cy.contains('We are open to discussing tailored sponsorship conditions').should('not.exist');
    });
    
    it('should display form fields', () => {
      cy.get('input[name="name"]').should('be.visible');
      cy.get('input[name="email"]').should('be.visible');
      cy.get('textarea[name="message"]').should('be.visible');
      cy.contains('Choose Picture').should('be.visible');
      cy.get('button[type="submit"]').should('be.visible');
    });
  

    it('should allow form submission with valid inputs and the Main Sponsorship option chosen', () => {
    
      cy.contains('Main Sponsorship').click(); //Choose Main Sponsorship
      cy.contains('Choose this option').click();
      cy.contains('Unselect').should('be.visible');

      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('john@example.com');
      cy.fixture('example.jpg').then(fileContent => {
        cy.get('input[name="picture"]').attachFile({ fileContent, fileName: 'example.jpg', mimeType: 'image/jpeg' });
      });
      cy.get('textarea[name="message"]').type('I would like to partner with you using the Main Sponsorship option.');
      cy.get('input[name="chosenSponsorshipOption"]').should('have.value', 'Main Sponsorship');
      cy.get('button[type="submit"]').click();
    });

    it('should allow form submission with valid inputs and the Theme Block Sponsorship option chosen', () => {
    
      cy.contains('Theme Block Sponsorship').click();
      cy.contains('Choose this option').click(); //Choose Theme Block Sponsorship
      cy.contains('Unselect').should('be.visible');

      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('john@example.com');
      cy.fixture('example.jpg').then(fileContent => {
        cy.get('input[name="picture"]').attachFile({ fileContent, fileName: 'example.jpg', mimeType: 'image/jpeg' });
      });
      cy.get('textarea[name="message"]').type('I would like to partner with you using the Theme Block Sponsorship option.');
      cy.get('input[name="chosenSponsorshipOption"]').should('have.value', 'Theme Block Sponsorship');
      cy.get('button[type="submit"]').click();
    });

    it('should allow form submission with valid inputs and the Custom Sponsorship option chosen', () => {
    
      cy.contains('Custom Sponsorship').click();
      cy.contains('Choose this option').click(); //Choose Custom Sponsorship
      cy.contains('Unselect').should('be.visible');

      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('john@example.com');
      cy.fixture('example.jpg').then(fileContent => {
        cy.get('input[name="picture"]').attachFile({ fileContent, fileName: 'example.jpg', mimeType: 'image/jpeg' });
      });
      cy.get('textarea[name="message"]').type('I would like to partner with you using the Custom Sponsorship option.');
      cy.get('input[name="chosenSponsorshipOption"]').should('have.value', 'Custom Sponsorship');
      cy.get('button[type="submit"]').click();
    });

    it('should allow switching between sponsorship options', () => {
    
      cy.contains('Custom Sponsorship').click();
      cy.contains('Choose this option').click(); //Choose Custom Sponsorship
      cy.contains('Unselect').should('be.visible');

      cy.get('input[name="chosenSponsorshipOption"]').should('have.value', 'Custom Sponsorship');
      cy.contains('Unselect').click(); //Unselect Custom Sponsorship
      cy.contains('Please select a sponsorship option before submitting.').should('be.visible'); //The Form goes back to asking a sponsorship to be selected

      cy.contains('Custom Sponsorship').click();

      cy.contains('Main Sponsorship').click();
      cy.contains('Choose this option').click(); //Choose the Main Sponsorship
      cy.contains('Unselect').should('be.visible');
      cy.get('input[name="chosenSponsorshipOption"]').should('have.value', 'Main Sponsorship');
      cy.contains('Main Sponsorship').click();

      cy.contains('Theme Block Sponsorship').click();
      
      cy.contains('Choose this option').click(); //Choose the Theme Block Sponsorship while Main Sponsorship is selected
      cy.contains('Unselect').should('be.visible');
      cy.get('input[name="chosenSponsorshipOption"]').should('have.value', 'Theme Block Sponsorship');

    });


    it('should not allow form submission without selecting package', () => {
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('john@example.com');
      cy.fixture('example.jpg').then(fileContent => {
        cy.get('input[name="picture"]').attachFile({ fileContent, fileName: 'example.jpg', mimeType: 'image/jpeg' });
      });
      cy.get('textarea[name="message"]').type('I would like to partner with you.');
      cy.contains('Please select a sponsorship option before submitting.').should('be.visible');
      cy.get('button[type="submit"]').should('be.disabled');
    });
  
  
    it('should navigate back to the main page', () => {
      cy.get('a[href="/"]').click();
      cy.url().should('include', '/');
    });


})