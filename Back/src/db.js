const { Sequelize } = require('sequelize');
const fs = require("fs");
const path = require("path");

// Configuración de la base de datos
const sequelize = new Sequelize('proyecto_db', 'root', '', {
  storage: path.join(__dirname, 'mydatabase.sqlite'), // Use an absolute path
  dialect: 'sqlite', // Puede ser 'mysql', 'sqlite', 'postgres', 'mssql'
});

// Verificar la conexión
try {
  sequelize.authenticate();
  console.log('Conexión establecida correctamente.');
} catch (error) {
  console.error('No se pudo conectar a la base de datos:', error);
}
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { User , Empresa, Aplicacion, Categoria, Publicacion} = sequelize.models

User.hasMany(Aplicacion, { foreignKey: 'id_user' });
Aplicacion.belongsTo(User, { foreignKey: 'id_user' });

Empresa.hasMany(Publicacion, { foreignKey: 'id_empresa' });
Publicacion.belongsTo(Empresa, { foreignKey: 'id_empresa' });

Publicacion.belongsToMany(Categoria, { through: 'TrabajoCategoria', foreignKey: 'id_trabajo' });
Categoria.belongsToMany(Publicacion, { through: 'TrabajoCategoria', foreignKey: 'id_categoria' });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};