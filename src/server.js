const express = require("express");
const { json } = require("body-parser");
const helmet = require("helmet");

const { PersonRouter } = require("./routes/person-routes");
const { MovieRouter } = require("./routes/movie-routes");

app = express();
app.use(helmet());
app.use(json());
app.use("/persons", PersonRouter);
app.use("/movies", MovieRouter);

module.exports = { app: app };
