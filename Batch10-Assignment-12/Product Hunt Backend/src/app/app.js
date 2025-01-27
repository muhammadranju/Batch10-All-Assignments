const express = require("express");
const router = require("../router");
const middleware = require("../middleware/devMiddleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use([middleware, router]);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use((req, res, next) => {
  const error = {
    statusCode: 404,
    message: `Con't find ${req.originalUrl} on the server!`,
  };
  next(error);
});

app.use((err, _req, res, _next) => {
  const statusCode = err.statusCode || 500;

  const response = {
    status: err.status,
    statusCode,
    message: err.message,
    error: err,
    stackTrace: process.env.NODE_ENV === "development" ? err.stack : "",
  };
  res.status(statusCode).json(response);
});

module.exports = app;
