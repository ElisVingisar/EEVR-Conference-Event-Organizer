/// <reference types = "cypress"/>  

describe('Register as a Speaker Form', () => {
    beforeEach(()=> {
        //cy.visit('http://localhost:3000')
        //cy.contains('a', 'Register').click()
        cy.visit('http://localhost:3000/register')
    })

    it('Filling out the Speaker form successfully', () => {
        
        cy.get('#name').type('Test Speaker')
        cy.get('#email').type('speaker@test.com')
        cy.get('#picture').selectFile('cypress/fixtures/testimage.jpg')
        cy.get('#info').type('I am a test speaker.')
        cy.get('#talkTitle').type('Speaking tests')
        cy.get('#slides').selectFile('cypress/fixtures/testslides.pptx')
        
        cy.get('button[type="submit"]').should('exist').should('be.visible')
        cy.get('button[type="submit"]').click()
    }) 


})