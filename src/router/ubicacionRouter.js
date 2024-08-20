const express = require('express');
const ubicacionController = require('../controllers/ubicacionController');
const authMiddleware = require('../middleware/authenticate');
const router = express.Router();

router.post('/', authMiddleware, ubicacionController.crearUbicacion);
router.get('/', authMiddleware, ubicacionController.obtenerUbicaciones);
router.get('/:id', authMiddleware, ubicacionController.obtenerUbicacion);
router.put('/:id', authMiddleware, ubicacionController.actualizarUbicacion);
router.delete('/:id', authMiddleware, ubicacionController.eliminarUbicacion);

module.exports = router;