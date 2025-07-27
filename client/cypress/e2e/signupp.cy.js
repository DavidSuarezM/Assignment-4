describe('Sign Up E2E Test', () => {
  it('should allow a user to sign up', () => {
    cy.visit('/signup');
    cy.get('#name').type('Milena');
    cy.get('#email').type('milena@example.com');
    cy.get('#password').type('12345678');
    cy.contains('Submit').click();

    // Verifica si aparece el mensaje de éxito
    cy.contains('New account successfully created.').should('be.visible');
  });
});
