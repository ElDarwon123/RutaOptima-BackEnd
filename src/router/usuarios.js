const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const authMiddleware = require('../middleware/authenticate');
const router = express.Router();

router.get('/perfil', authMiddleware, usuarioController.obtenerUsuario);
router.put('/perfil', authMiddleware, usuarioController.actualizarUsuario);
router.delete('/perfil', authMiddleware, usuarioController.eliminarUsuario);

module.exports = router;