// Importar dependencias
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Inicializar Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Para parsear JSON

// Importar rutas
const ventasRoutes = require('./routes/ventas');

// Usar rutas
app.use('/ventas', ventasRoutes);

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error conectando a MongoDB:', err));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando');
});

// Iniciar el servidor
const PORT = process.env.PORT || 5010;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});