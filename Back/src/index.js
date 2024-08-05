const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const cors = require("cors");
require("dotenv").config();
const { ACCESS1 } = process.env;

require("./db.js");

const server = express();

// Configurar CORS
const corsOptions = {
  origin: (origin, callback) => {
    if (ACCESS1 === '*' || !origin || [ACCESS1].includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type, Authorization, x-access-token",
  credentials: true,
};

server.use(cors(corsOptions));

server.name = "API";

// Middleware configuration
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));

// Routes
server.use("/", routes);

// Error catching endware.
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  // console.error(err);
  res.status(status).send(message);
});

module.exports = server;
