const mongoose = require('mongoose');

// Definir el esquema de la venta
const ventaSchema = new mongoose.Schema({
  vendedora: {
    type: String,
    required: true
  },
  tipoVaso: {
    type: String,
    required: true
  },
  comprador: {
    type: String,
    required: true
  },
  metodoPago: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

// Crear el modelo de la venta
const Venta = mongoose.model('Venta', ventaSchema);

// Exportar el modelo
module.exports = Venta;