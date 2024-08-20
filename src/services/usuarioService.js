const { Usuario } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UsuarioService {
  async crearUsuario(email, password) {
    return await Usuario.create({ email, password });
  }

  async autenticarUsuario(email, password) {
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario || !(await usuario.validarPassword(password))) {
      throw new Error('Credenciales inválidas');
    }
    return jwt.sign({ userId: usuario.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  }

  async obtenerUsuario(id) {
    return await Usuario.findByPk(id);
  }

  async actualizarUsuario(id, datos) {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) throw new Error('Usuario no encontrado');
    return await usuario.update(datos);
  }

  async eliminarUsuario(id) {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) throw new Error('Usuario no encontrado');
    await usuario.destroy();
  }
}

module.exports = new UsuarioService();