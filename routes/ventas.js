const express = require('express');
const Venta = require('../models/Venta');
const router = express.Router();

// Crear una nueva venta
router.post('/', async (req, res) => {
  try {
    const nuevaVenta = new Venta(req.body);
    await nuevaVenta.save();
    res.status(201).send(nuevaVenta);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Obtener todas las ventas
router.get('/', async (req, res) => {
  try {
    const ventas = await Venta.find();
    res.status(200).send(ventas);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Eliminar una venta por ID
router.delete('/:id', async (req, res) => {
    try {
      console.log('Eliminando venta con ID:', req.params.id); // Log para depuración
      const ventaEliminada = await Venta.findByIdAndDelete(req.params.id);
      if (!ventaEliminada) {
        return res.status(404).send({ error: 'Venta no encontrada' });
      }
      res.status(200).send({ message: 'Venta eliminada exitosamente' });
    } catch (error) {
      res.status(500).send({ error: 'Error al eliminar la venta' });
    }
  });

module.exports = router;