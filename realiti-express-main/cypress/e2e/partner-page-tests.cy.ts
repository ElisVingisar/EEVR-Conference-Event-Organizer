/// <reference types = "cypress"/>  

describe('Register as a Partner Form', () => {
    beforeEach(()=> {
        //cy.visit('http://localhost:3000')
        //cy.get('a[href*="/partners"]').contains('Become a Partner').click()
        cy.visit('http://localhost:3000/partners')
    })

    it('should load the partners page', () => {
        // Check that the title is present
        cy.contains('Partner with Us').should('be.visible');
        cy.contains('Explore collaboration opportunities').should('be.visible');
      });
    
      it('should display form fields', () => {
        cy.get('input[name="name"]').should('be.visible');
        cy.get('input[name="email"]').should('be.visible');
        cy.get('textarea[name="message"]').should('be.visible');
        cy.get('button[type="submit"]').should('be.visible');
      });
    
      it('should allow form submission with valid inputs', () => {
        cy.get('input[name="name"]').type('John Doe');
        cy.get('input[name="email"]').type('john@example.com');
        cy.get('textarea[name="message"]').type('I would like to partner with you.');
        cy.get('button[type="submit"]').click();
      });
    
      it('should navigate back to the main page', () => {
        cy.get('a[href="/"]').click();
        cy.url().should('include', '/');
      });

})