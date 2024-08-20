const { Ruta, Ubicacion, Conexion } = require('../models');

class RutaService {
  async crearRuta(nombre, inicioId, usuarioId) {
    return await Ruta.create({ nombre, inicioId, UsuarioId: usuarioId });
  }

  async obtenerRutas(usuarioId) {
    return await Ruta.findAll({ where: { UsuarioId: usuarioId } });
  }

  async obtenerRuta(id, usuarioId) {
    return await Ruta.findOne({ where: { id, UsuarioId: usuarioId } });
  }

  async actualizarRuta(id, datos, usuarioId) {
    const ruta = await Ruta.findOne({ where: { id, UsuarioId: usuarioId } });
    if (!ruta) throw new Error('Ruta no encontrada');
    return await ruta.update(datos);
  }

  async eliminarRuta(id, usuarioId) {
    const ruta = await Ruta.findOne({ where: { id, UsuarioId: usuarioId } });
    if (!ruta) throw new Error('Ruta no encontrada');
    await ruta.destroy();
  }

  async calcularRutaOptima(inicioId, usuarioId) {
    // Implementa aquí la lógica para calcular la ruta óptima
    // Esto podría implicar el uso de algoritmos como Dijkstra o A*
    const ubicaciones = await Ubicacion.findAll({ where: { UsuarioId: usuarioId } });
    const conexiones = await Conexion.findAll({ where: { UsuarioId: usuarioId } });
    
    // Aquí iría la implementación del algoritmo de ruta óptima
    // Por ahora, devolvemos un resultado de ejemplo
    return {
      ruta: ubicaciones.map(u => u.id),
      distanciaTotal: conexiones.reduce((sum, c) => sum + c.peso, 0)
    };
  }
}

module.exports = new RutaService();