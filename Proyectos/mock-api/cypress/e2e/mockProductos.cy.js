describe('Mockeo de API con respuesta falsa', () => {
  it('Muestra los productos mockeados en la tabla', () => {
    cy.intercept('GET', '/api/productos', {
      statusCode: 200,
      body: [
        { id: 1, nombre: 'Manzana', precio: 100 },
        { id: 2, nombre: 'Naranja', precio: 150 }
      ]
    }).as('mockProductos');

    cy.visit('http://127.0.0.1:8080'); // o la URL de tu app
    cy.wait('@mockProductos');

    cy.get('table')
      .should('contain', 'Manzana')
      .and('contain', 'Naranja');
  });
});
