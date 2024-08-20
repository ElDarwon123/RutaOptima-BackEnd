const express = require('express');
const rutaController = require('../controllers/rutaController');
const authMiddleware = require('../middleware/authenticate');
const router = express.Router();

router.post('/', authMiddleware, rutaController.crearRuta);
router.get('/', authMiddleware, rutaController.obtenerRutas);
router.get('/:id', authMiddleware, rutaController.obtenerRuta);
router.put('/:id', authMiddleware, rutaController.actualizarRuta);
router.delete('/:id', authMiddleware, rutaController.eliminarRuta);
router.post('/optima', authMiddleware, rutaController.calcularRutaOptima);

module.exports = router;