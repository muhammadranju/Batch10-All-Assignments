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
  // Create a new ApiError instance with a 404 status code and a custom message.
  const error = {
    statusCode: 404,
    message: `Con't find ${req.originalUrl} on the server!`,
  };

  // Call the next middleware function with the error.
  next(error);
});

app.use((err, _req, res, _next) => {
  // Set the HTTP status code to the error status code if available,
  // otherwise set it to 500 (Internal Server Error).
  const statusCode = err.statusCode || 500;

  // Prepare the response object with the error details.
  const response = {
    status: err.status,
    statusCode,
    message: err.message,
    error: err,
    stackTrace: process.env.NODE_ENV === "development" ? err.stack : "",
  };

  // Send the response with the error details.
  res.status(statusCode).json(response);
});

module.exports = app;
