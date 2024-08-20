const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Conexion = sequelize.define('Conexion', {
  peso: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = Conexion;