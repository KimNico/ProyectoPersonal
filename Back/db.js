const { Sequelize } = require('sequelize');

// Configuración de la base de datos
const sequelize = new Sequelize('proyecto_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', // Puede ser 'mysql', 'sqlite', 'postgres', 'mssql'
});

// Verificar la conexión
try {
  sequelize.authenticate();
  console.log('Conexión establecida correctamente.');
} catch (error) {
  console.error('No se pudo conectar a la base de datos:', error);
}

module.exports = sequelize;
