describe('Verificacion del título de la página', () => {
  it('Debería contener la palabra "Cypress" en el título', () => {
    cy.visit('http://example.cypress.io')
    cy.title().should('include', 'Cypress')
  })
})