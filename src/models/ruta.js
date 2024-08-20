const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ruta = sequelize.define('Ruta', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Ruta;