require("dotenv").config();
const http = require("http");
const app = require("./src/app/app");
const databaseConnection = require("./src/db/db.config");

databaseConnection();
const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
