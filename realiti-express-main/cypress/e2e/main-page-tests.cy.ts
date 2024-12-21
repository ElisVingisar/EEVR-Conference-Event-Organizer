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


describe('Buying tickets', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/#tickets'); 
    });

    it('should not allow buying tickets when no tickets are selected', () => {
    
        const alertShown = cy.stub().as("alertShown");

        cy.on ('window:alert', alertShown);

        cy.contains('Buy Tickets').click();

        // Check for error message
        cy.get("@alertShown").should("have.been.calledOnceWith", 'Please select at least one ticket.');
    
    });

    it('should contain four different types of tickets', () => {
        cy.get('div[id="ticket"]').should('have.length', 4);
        cy.get('div[id="ticket"]').eq(0).contains("Regular Realiti");
        cy.get('div[id="ticket"]').eq(1).contains("Student Realiti");
        cy.get('div[id="ticket"]').eq(2).contains("VIP Realiti");
        cy.get('div[id="ticket"]').eq(3).contains("Team Realiti");
    
    });

    it('should update ticket quanitity when "+" or "-" is clicked', () => {
        cy.get('div[id="ticket"]').eq(0).find('div[id="quantity"]').should('have.text', '0');
        // Click "+" button to increase quantity
        cy.get('div[id="ticket').eq(0).find('button[id="increase-quantity"]').click();
        cy.get('div[id="ticket').eq(0).find('div[id="quantity"]').should('have.text', '1');

        // Click "-" button to decrease quantity
        cy.get('div[id="ticket').eq(0).find('button[id="decrease-quantity"]').click();
        cy.get('div[id="ticket').eq(0).find('div[id="quantity"]').should('have.text', '0');

        // Clicking the "-" button should not decrease quantity below zero
        cy.get('div[id="ticket').eq(0).find('button[id="decrease-quantity"]').click();
        cy.get('div[id="ticket').eq(0).find('div[id="quantity"]').should('have.text', '0');
    
    });

    it('should be able to buy tickets when tickets are selected', () => {
        cy.get('div[id="ticket"]').eq(0).find('div[id="quantity"]').should('have.text', '0');
        // Click "+" button to increase quantity
        cy.get('div[id="ticket').eq(1).find('button[id="increase-quantity"]').click();
        cy.get('div[id="ticket').eq(1).find('div[id="quantity"]').should('have.text', '1');
        
        cy.contains('Buy Tickets').click();

        cy.url().should('not.include', 'localhost');

    });
    
})