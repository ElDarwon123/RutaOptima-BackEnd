const conexionService = require('../services/conexionService');

exports.crearConexion = async (req, res) => {
  try {
    const { ubicacion1Id, ubicacion2Id, peso } = req.body;
    const conexion = await conexionService.crearConexion(ubicacion1Id, ubicacion2Id, peso, req.userData.userId);
    res.status(201).json(conexion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerConexiones = async (req, res) => {
  try {
    const conexiones = await conexionService.obtenerConexiones(req.userData.userId);
    res.json(conexiones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerConexion = async (req, res) => {
  try {
    const conexion = await conexionService.obtenerConexion(req.params.id, req.userData.userId);
    if (!conexion) return res.status(404).json({ mensaje: 'Conexión no encontrada' });
    res.json(conexion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.actualizarConexion = async (req, res) => {
  try {
    const conexion = await conexionService.actualizarConexion(req.params.id, req.body, req.userData.userId);
    res.json(conexion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.eliminarConexion = async (req, res) => {
  try {
    await conexionService.eliminarConexion(req.params.id, req.userData.userId);
    res.json({ mensaje: 'Conexión eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};