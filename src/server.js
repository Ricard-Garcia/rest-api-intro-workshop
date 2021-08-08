const express = require("express");
const { json } = require("body-parser");
const helmet = require("helmet");

const { AccountRouter } = require("./routes/account-routes");
const { UserRouter } = require("./routes/user-routes");
const { PersonRouter } = require("./routes/person-routes");
const { MovieRouter } = require("./routes/movie-routes");

app = express();
app.use(helmet());
app.use(json());
app.use("/account", AccountRouter);
app.use("/users", UserRouter);
app.use("/persons", PersonRouter);
app.use("/movies", MovieRouter);

module.exports = { app: app };
