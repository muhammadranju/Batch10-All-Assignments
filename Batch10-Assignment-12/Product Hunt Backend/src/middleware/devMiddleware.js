const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const morgan = require("morgan");

const corsOptions = {
  origin: process.env.FRONTEND_URL, // Frontend origin
  credentials: true, // Allow credentials (cookies)
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"], // Add required headers
};

const middleware = [
  cors(corsOptions),
  morgan("dev"),
  cookieParser(),
  express.json(),
  express.urlencoded({ extended: true }),
];

module.exports = middleware;
