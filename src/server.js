const express = require("express");
const { json } = require("body-parser");
const helmet = require("helmet");

const { PersonRouter } = require("./routes/person-routes");

app = express();
app.use(helmet());
app.use(json());
app.use("/persons", PersonRouter);

module.exports = { app: app };
