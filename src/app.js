const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./router/authRouter');
const usuarioRoutes = require('./router/usuarios');
const ubicacionRoutes = require('./router/ubicacionRouter');
const conexionRoutes = require('./router/conexionRouter');
const rutaRoutes = require('./router/rutaRouter');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors')
require('dotenv').config();

const app = express();

let corsOption = {
  origin: ['*']

}

app.use(express.json());

// Rutas
app.use(cors({origin: 'http://localhost:5173'}))
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
  app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT}`));
}).catch(err => console.log('Error al conectar con la base de datos:', err));

module.exports = app;