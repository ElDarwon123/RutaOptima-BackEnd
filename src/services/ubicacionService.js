const { Ubicacion } = require('../models');

class UbicacionService {
  async crearUbicacion(nombre, posX, posY, usuarioId) {
    return await Ubicacion.create({ nombre, posX, posY, UsuarioId: usuarioId });
  }

  async obtenerUbicaciones(usuarioId) {
    return await Ubicacion.findAll({ where: { UsuarioId: usuarioId } });
  }

  async obtenerUbicacion(id, usuarioId) {
    return await Ubicacion.findOne({ where: { id, UsuarioId: usuarioId } });
  }

  async actualizarUbicacion(id, datos, usuarioId) {
    const ubicacion = await Ubicacion.findOne({ where: { id, UsuarioId: usuarioId } });
    if (!ubicacion) throw new Error('Ubicación no encontrada');
    return await ubicacion.update(datos);
  }

  async eliminarUbicacion(id, usuarioId) {
    const ubicacion = await Ubicacion.findOne({ where: { id, UsuarioId: usuarioId } });
    if (!ubicacion) throw new Error('Ubicación no encontrada');
    await ubicacion.destroy();
  }
}

module.exports = new UbicacionService();