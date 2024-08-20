const { Conexion } = require('../models');

class ConexionService {
  async crearConexion(ubicacion1Id, ubicacion2Id, peso, usuarioId) {
    return await Conexion.create({ ubicacion1Id, ubicacion2Id, peso, UsuarioId: usuarioId });
  }

  async obtenerConexiones(usuarioId) {
    return await Conexion.findAll({ where: { UsuarioId: usuarioId } });
  }

  async obtenerConexion(id, usuarioId) {
    return await Conexion.findOne({ where: { id, UsuarioId: usuarioId } });
  }

  async actualizarConexion(id, datos, usuarioId) {
    const conexion = await Conexion.findOne({ where: { id, UsuarioId: usuarioId } });
    if (!conexion) throw new Error('Conexión no encontrada');
    return await conexion.update(datos);
  }

  async eliminarConexion(id, usuarioId) {
    const conexion = await Conexion.findOne({ where: { id, UsuarioId: usuarioId } });
    if (!conexion) throw new Error('Conexión no encontrada');
    await conexion.destroy();
  }
}

module.exports = new ConexionService();