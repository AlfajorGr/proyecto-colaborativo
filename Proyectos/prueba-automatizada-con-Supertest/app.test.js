const request = require('supertest');
const app = require('./app');

describe('API de productos', () => {
  it('debería crear y recuperar un producto correctamente', async () => {
    // Crear producto
    const nuevoProducto = { nombre: 'Laptop', precio: 1200 };

    const postRes = await request(app)
      .post('/productos')
      .send(nuevoProducto)
      .expect(201);

    expect(postRes.body).toHaveProperty('id');
    expect(postRes.body.nombre).toBe(nuevoProducto.nombre);
    expect(postRes.body.precio).toBe(nuevoProducto.precio);

    const productoId = postRes.body.id;

    // Recuperar producto
    const getRes = await request(app)
      .get(`/productos/${productoId}`)
      .expect(200);

    // Verificar datos
    expect(getRes.body.nombre).toBe(nuevoProducto.nombre);
    expect(getRes.body.precio).toBe(nuevoProducto.precio);
  });
});
