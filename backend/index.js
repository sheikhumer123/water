// require express
const express = require("express");
const path = require("path");
var cors = require("cors");
var routes = require("./route"); //importing route
require("./config.js");
// create express app
const app = express();
// use middleware on express app
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
routes(app);
// define port to run express app
const port = process.env.PORT || 5000;
// Add endpoint
app.get("/", (req, res) => {
  res.send("Welcome to our Todo App");
});
// Listen to server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
