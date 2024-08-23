const usuarioService = require('../services/usuarioService');

exports.registro = async (req, res) => {
  try {
    const { email, password } = req.body;
    await usuarioService.crearUsuario(email, password);
    console.log(req.body);
    
    res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.log(error);
    
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await usuarioService.autenticarUsuario(email, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};