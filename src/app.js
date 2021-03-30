const express = require("express");
const bodyParser = require("body-parser");
const contactController = require("./components/contact/contact.controller");

const app = express();
app.use(bodyParser.json());

app.use("/api", contactController);

app.get("*", async (req, res) => {
  res.status(404).send("Route not found!");
});

module.exports = app;
