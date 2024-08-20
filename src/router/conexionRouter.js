const express = require('express');
const conexionController = require('../controllers/conexionController');
const authMiddleware = require('../middleware/authenticate');
const router = express.Router();

router.post('/', authMiddleware, conexionController.crearConexion);
router.get('/', authMiddleware, conexionController.obtenerConexiones);
router.get('/:id', authMiddleware, conexionController.obtenerConexion);
router.put('/:id', authMiddleware, conexionController.actualizarConexion);
router.delete('/:id', authMiddleware, conexionController.eliminarConexion);

module.exports = router;