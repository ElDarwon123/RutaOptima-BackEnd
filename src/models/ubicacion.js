const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ubicacion = sequelize.define('Ubicacion', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  posX: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  posY: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = Ubicacion;