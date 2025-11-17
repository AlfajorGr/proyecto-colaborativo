// app.test.js
const request = require('supertest');
const app = require('./app');

describe('Autenticación y manejo de errores', () => {
  it('debería denegar acceso sin token (401)', async () => {
    const res = await request(app).get('/perfil');
    expect(res.status).toBe(401);
    expect(res.body.error).toBe('Token requerido');
  });

  it('debería permitir acceso con token válido (200)', async () => {
    // Primero iniciamos sesión
    const login = await request(app)
      .post('/auth/login')
      .send({ username: 'admin', password: '1234' })
      .expect(200);

    const token = login.body.token;

    // Luego accedemos a /perfil con el token
    const perfil = await request(app)
      .get('/perfil')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(perfil.body.usuario).toBe('admin');
  });

  it('debería rechazar token inválido (403)', async () => {
    const res = await request(app)
      .get('/perfil')
      .set('Authorization', 'Bearer token_invalido')
      .expect(403);

    expect(res.body.error).toBe('Token inválido');
  });
});
