// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getRandomCat', () => {
  cy.request('https://api.thecatapi.com/v1/images/search')
    .its('body.0.url')
    .then((url) => {
      cy.log('Imagen obtenida: ' + url)
      // Aseguramos que el elemento #cat-image exista antes de usar invoke
      cy.get('#cat-image', { timeout: 5000 }).should('exist')
      cy.get('#cat-image').invoke('attr', 'src', url)
    })
})



