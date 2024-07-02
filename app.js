const express = require("express");
const app = express();
const cors = require("cors");
const taskRouter = require("./router/taskRouter");

// Middlewares
app.use(express.json());
app.use(cors());

// Connecting routes
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
    res.send("<h1>Server is running</h1>");
});

module.exports = app;
