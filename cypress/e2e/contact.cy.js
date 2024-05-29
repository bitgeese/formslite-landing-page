describe('Submit Contact Form', () => {
  it('should go to contact page, fill form, submit, and check redirection to success page', () => {
    // Go to /contact page
    cy.visit('/contact');

    // Fill name, website, email, message inputs in form
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="website (optional)"]').type('https://example.com');
    cy.get('input[type="email"]').type('test@example.com');
    cy.get('textarea[name="message"]').type('This is a test message.');

    // Press submit button
    cy.get('button[type="submit"]').click();

    // Check if redirected to success page https://formslite.io/success
    cy.url().should('eq', 'https://formslite.io/success');
  });
});
