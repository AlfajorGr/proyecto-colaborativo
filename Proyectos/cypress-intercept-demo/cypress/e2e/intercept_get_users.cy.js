describe('Interceptar GET /api/users', () => {
  it('Debe interceptar y validar la respuesta', () => {
    cy.intercept('GET', '**/api/users?page=2').as('getUsers')

    cy.visit('https://reqres.in/') // página válida (HTML)

    cy.request('https://reqres.in/api/users?page=2') // forzamos la carga de datos

    cy.wait('@getUsers').then((interception) => {
      expect(interception.response.statusCode).to.eq(200)
      expect(interception.response.body.data).to.be.an('array').and.have.length.greaterThan(0)
    })
  })
})
