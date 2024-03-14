const server = require("./src/index.js");
const { conn } = require("./src/db.js");
require("dotenv").config();
const { PORT } = process.env;

// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
  server.listen(PORT, async () => {
    console.log(`is listening at port ${PORT}`); // eslint-disable-line no-console
  });
});
