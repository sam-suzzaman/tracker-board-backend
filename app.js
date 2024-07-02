const express = require("express");
const app = express();
const cors = require("cors");

// Middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("<h1>Server is running</h1>");
});

module.exports = app;
