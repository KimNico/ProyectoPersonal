const express = require('express');
const app = express();
require("./db.js");

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});

// Define tus modelos aquí (ver la documentación de Sequelize para más detalles)

// Sincronizar modelos con la base de datos
sequelize.sync({ force: true }).then(() => {
  console.log('Modelos sincronizados correctamente con la base de datos.');
}).catch((error) => {
  console.error('Error al sincronizar modelos con la base de datos:', error);
});