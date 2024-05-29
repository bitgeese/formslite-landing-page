describe('Create Access Key', () => {
    it('should go to homepage, fill email, submit, and check for success message', () => {
      // Go to homepage
      cy.visit('/');
  
      // Fill email in input
      cy.get('input[type="email"]').type('test@example.com');
  
      // Press submit button
      cy.get('button[type="submit"]').click();
  
      // Check for success message
      cy.contains('Access key created successfully!').should('be.visible');
    });
  });
  