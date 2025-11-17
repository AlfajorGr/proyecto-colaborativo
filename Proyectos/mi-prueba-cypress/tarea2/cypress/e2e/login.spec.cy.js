describe('Prueba con fixture de usuario', () => {
  it('Muestra los datos desde el fixture', () => {
    cy.fixture('user').then((user) => {
      cy.log(user.username)
      cy.log(user.password)
    })
  })
})
