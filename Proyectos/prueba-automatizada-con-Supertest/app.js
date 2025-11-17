const express = require('express');
const app = express();

app.use(express.json());

let productos = [];
let idCounter = 1;

// Ruta POST /productos
app.post('/productos', (req, res) => {
  const { nombre, precio } = req.body;
  if (!nombre || !precio) {
    return res.status(400).json({ error: 'Faltan datos del producto' });
  }

  const nuevoProducto = { id: idCounter++, nombre, precio };
  productos.push(nuevoProducto);
  res.status(201).json(nuevoProducto);
});

// Ruta GET /productos/:id
app.get('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find(p => p.id === id);
  if (!producto) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  res.json(producto);
});

module.exports = app;
