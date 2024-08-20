const Usuario = require('./usuario');
const Ubicacion = require('./ubicacion');
const Conexion = require('./conexion');
const Ruta = require('./ruta');

Usuario.hasMany(Ubicacion);
Ubicacion.belongsTo(Usuario);

Usuario.hasMany(Conexion);
Conexion.belongsTo(Usuario);

Ubicacion.hasMany(Conexion, { as: 'ConexionesDesde', foreignKey: 'ubicacion1Id' });
Ubicacion.hasMany(Conexion, { as: 'ConexionesHacia', foreignKey: 'ubicacion2Id' });
Conexion.belongsTo(Ubicacion, { as: 'Ubicacion1', foreignKey: 'ubicacion1Id' });
Conexion.belongsTo(Ubicacion, { as: 'Ubicacion2', foreignKey: 'ubicacion2Id' });

Usuario.hasMany(Ruta);
Ruta.belongsTo(Usuario);

Ruta.belongsTo(Ubicacion, { as: 'Inicio', foreignKey: 'inicioId' });

module.exports = {
  Usuario,
  Ubicacion,
  Conexion,
  Ruta
};