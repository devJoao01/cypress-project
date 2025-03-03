describe('Cadastro de Usuário', () => {
  beforeEach(() => {
    cy.visit('/'); 
  });

  it('realizando teste no form', () => {
    cy.get('#register-form').should('be.visible');

    cy.get('.input-field').should('have.length', 3);

    cy.get('#register-button').should('have.text', 'Cadastrar');

    cy.get('.login-link').should('be.visible');

    cy.get('input[type="text"]').type('teste');
    cy.get('input[type="email"]').type('teste@example.com');
    cy.get('input[type="password"]').type('password');

    cy.get('#register-button').click();
  });
});