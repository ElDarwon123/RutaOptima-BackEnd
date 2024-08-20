const usuarioService = require('../services/usuarioService');

exports.obtenerUsuario = async (req, res) => {
  try {
    const usuario = await usuarioService.obtenerUsuario(req.userData.userId);
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.actualizarUsuario = async (req, res) => {
  try {
    const usuario = await usuarioService.actualizarUsuario(req.userData.userId, req.body);
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.eliminarUsuario = async (req, res) => {
  try {
    await usuarioService.eliminarUsuario(req.userData.userId);
    res.json({ mensaje: 'Usuario eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};