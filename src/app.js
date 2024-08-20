const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./router/authRouter');
const usuarioRoutes = require('./router/usuarios');
const ubicacionRoutes = require('./router/ubicacionRouter');
const conexionRoutes = require('./router/conexionRouter');
const rutaRoutes = require('./router/rutaRouter');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();

const app = express();

app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/ubicaciones', ubicacionRoutes);
app.use('/api/conexiones', conexionRoutes);
app.use('/api/rutas', rutaRoutes);

// Manejador de errores
app.use(errorHandler);

// Iniciar el servidor
sequelize.sync().then(() => {
  console.log('Base de datos conectada');
  app.listen(process.env.PORT, () => console.log(`Servidor corriendo en el puerto ${process.env.PORT}`));
}).catch(err => console.log('Error al conectar con la base de datos:', err));

module.exports = app;