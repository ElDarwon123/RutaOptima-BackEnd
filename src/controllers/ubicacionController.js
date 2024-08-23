const ubicacionService = require('../services/ubicacionService');

exports.crearUbicacion = async (req, res) => {
  try {
    const { nombre, posX, posY } = req.body;
    const ubicacion = await ubicacionService.crearUbicacion(nombre, posX, posY, req.userData.userId);
    res.status(201).json(ubicacion);
  } catch (error) {
    console.log(error);
    
    res.status(400).json({ error: error.message });
  }
};

exports.obtenerUbicaciones = async (req, res) => {
  try {
    const ubicaciones = await ubicacionService.obtenerUbicaciones(req.userData.userId);
    res.json(ubicaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerUbicacion = async (req, res) => {
  try {
    const ubicacion = await ubicacionService.obtenerUbicacion(req.params.id, req.userData.userId);
    if (!ubicacion) return res.status(404).json({ mensaje: 'Ubicación no encontrada' });
    res.json(ubicacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.actualizarUbicacion = async (req, res) => {
  try {
    const ubicacion = await ubicacionService.actualizarUbicacion(req.params.id, req.body, req.userData.userId);
    res.json(ubicacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.eliminarUbicacion = async (req, res) => {
  try {
    await ubicacionService.eliminarUbicacion(req.params.id, req.userData.userId);
    res.json({ mensaje: 'Ubicación eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};