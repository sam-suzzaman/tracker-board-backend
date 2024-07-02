const express = require("express");
const taskRouter = express.Router();

// Controllers
const {
    addTaskHandler,
    getAllTaskHandler,
    getSingleTaskHandler,
    updateTaskHandler,
    deleteSingleTaskHandler,
} = require("../controller/TaskController");

// Routes
taskRouter.route("/").post(addTaskHandler).get(getAllTaskHandler);

taskRouter
    .route("/:id")
    .get(getSingleTaskHandler)
    .patch(updateTaskHandler)
    .delete(deleteSingleTaskHandler);

module.exports = taskRouter; // exporting that router
