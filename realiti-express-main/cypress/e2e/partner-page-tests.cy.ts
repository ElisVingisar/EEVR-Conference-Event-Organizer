/// <reference types = "cypress"/>  

describe('Register as a Partner Form', () => {
    beforeEach(()=> {
        //cy.visit('http://localhost:3000')
        //cy.get('a[href*="/partners"]').contains('Become a Partner').click()
        cy.visit('http://localhost:3000/partners')
    })

    it('Filling out the Partner form successfully', () => {
        //partnering option selextion
        cy.get('#name').type('Test Partner Company Name')
        cy.get('#email').type('partner@test.com')
        cy.get('#message').type('I am a test partner.')
        //cy.get('#logo').selectFile('cypress/fixtures/testimage.jpg')

        cy.get('button[type="submit"]').should('exist').should('be.visible')
        cy.get('button[type="submit"]').click()
    }) 

    it('Should not allow leaving the Partner form empty', () => {
        
        cy.get('form').submit()
        cy.get('form').should('exist')

       // cy.contains('Please fill out this field'); 
    }) 
    it('Should not allow leaving the Partner "Name" field empty', () => {
        
        cy.get('#email').type('partner@test.com')
        cy.get('#message').type('I am a test partner.')
        //cy.get('#logo').selectFile('cypress/fixtures/testimage.jpg')
        cy.get('form').submit()
        cy.get('form').should('exist')

        //cy.contains('Please fill out this field'); 
    }) 
    it('Should not allow leaving the Partner "Email" field empty', () => {
        
        cy.get('#name').type('Test Partner Company Name')
        cy.get('#message').type('I am a test partner.')
        //cy.get('#logo').selectFile('cypress/fixtures/testimage.jpg')
        cy.get('form').submit()
        cy.get('form').should('exist')

        //cy.contains('Please fill out this field'); 
    }) 
    it('Should not allow selecting a file with an unsupported format empty', () => {
        
        cy.get('#name').type('Test Partner Company Name')
        cy.get('#message').type('I am a test partner.')
        //cy.get('#logo').selectFile('cypress/fixtures/testslides.pptx')
        cy.get('form').submit()
        cy.get('form').should('exist')

        //cy.contains('Please fill out this field'); 
    }) 

})