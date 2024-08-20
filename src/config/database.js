const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql',
  logging: false // set to console.log to see the raw SQL queries
});

module.exports = sequelize;