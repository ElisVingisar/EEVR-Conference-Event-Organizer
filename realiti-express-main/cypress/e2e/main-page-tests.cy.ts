describe('Feedback Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/#feedback'); 
    });

    it('should display error messages when required fields are not filled out', () => {

        cy.get('input[name="speakerRequest"]').type('John Doe');

        cy.get('textarea[name="comments"]').type('Beautiful event');

        // Submit the form without filling out required fields
        cy.contains('Submit Feedback').click();
    
        // Check for error messages
        cy.get('p.text-red-500').should('have.length', 2); // Two error messages for required fields
        cy.get('p.text-red-500')
        .first()
        .should('contain.text', 'Satisfaction Rating is required.');

        cy.get('p.text-red-500')
        .last()
        .should('contain.text', 'Event Organization Rating is required.');
    });

    it('should allow successful submission when all required fields are filled', () => {
    
        const alertShown = cy.stub().as("alertShown");

        cy.on ('window:alert', alertShown);

        cy.get('svg[class="lucide lucide-star cursor-pointer"]').first().click(); //1 star for the first option

        cy.get('svg[class="lucide lucide-star cursor-pointer"]').eq(9).click(); //5 stars for the second option

        cy.contains('Submit Feedback').click();

        // Check for success messages
        cy.get("@alertShown").should("have.been.calledOnceWith", 'Feedback submitted successfully!');

    
    });

    it('should allow successful submission when all fields are filled', () => {
    
        const alertShown = cy.stub().as("alertShown");

        cy.on ('window:alert', alertShown);

        cy.get('svg[class="lucide lucide-star cursor-pointer"]').eq(4).click(); //5 stars for the first option
        cy.get('input[name="speakerRequest"]').type('John Doe');

        cy.get('svg[class="lucide lucide-star cursor-pointer"]').eq(9).click(); //5 stars for the second option
        cy.get('textarea[name="comments"]').type('Beautiful event');

        cy.contains('Submit Feedback').click();

        // Check for success messages
        cy.get("@alertShown").should("have.been.calledOnceWith", 'Feedback submitted successfully!');
    
    });
    




})