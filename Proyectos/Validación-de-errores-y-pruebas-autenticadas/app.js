// app.js
const express = require('express');
const app = express();

app.use(express.json());

// Simulamos una base de usuarios
const USER = { username: 'admin', password: '1234' };

// Token simulado (en un caso real usarías jwt.sign)
const FAKE_TOKEN = 'token12345';

// Ruta de login
app.post('/auth/login', (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    return res.status(200).json({ token: FAKE_TOKEN });
  } else {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }
});

// Middleware de autenticación simulada
function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token requerido' });
  }
  if (token !== `Bearer ${FAKE_TOKEN}`) {
    return res.status(403).json({ error: 'Token inválido' });
  }

  next();
}

// Ruta protegida
app.get('/perfil', authMiddleware, (req, res) => {
  res.status(200).json({ usuario: 'admin', rol: 'Administrador' });
});

module.exports = app;
