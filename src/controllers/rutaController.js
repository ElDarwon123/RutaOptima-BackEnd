const rutaService = require('../services/rutaService');

exports.crearRuta = async (req, res) => {
  try {
    const { nombre, inicioId } = req.body;
    const ruta = await rutaService.crearRuta(nombre, inicioId, req.userData.userId);
    res.status(201).json(ruta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerRutas = async (req, res) => {
  try {
    const rutas = await rutaService.obtenerRutas(req.userData.userId);
    res.json(rutas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerRuta = async (req, res) => {
  try {
    const ruta = await rutaService.obtenerRuta(req.params.id, req.userData.userId);
    if (!ruta) return res.status(404).json({ mensaje: 'Ruta no encontrada' });
    res.json(ruta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.actualizarRuta = async (req, res) => {
  try {
    const ruta = await rutaService.actualizarRuta(req.params.id, req.body, req.userData.userId);
    res.json(ruta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.eliminarRuta = async (req, res) => {
  try {
    await rutaService.eliminarRuta(req.params.id, req.userData.userId);
    res.json({ mensaje: 'Ruta eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.calcularRutaOptima = async (req, res) => {
  try {
    const { inicioId } = req.body;
    const rutaOptima = await rutaService.calcularRutaOptima(inicioId, req.userData.userId);
    res.json(rutaOptima);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};