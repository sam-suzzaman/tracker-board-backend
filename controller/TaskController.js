const TaskModel = require("../model/task");
const mongoose = require("mongoose");

// Add Task Handler
exports.addTaskHandler = async (req, res) => {
    try {
        const newTask = new TaskModel(req.body);
        const result = await newTask.save();
        res.status(201).json({
            status: true,
            message: "Task added Successfully",
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "Failed",
            error: error.message,
        });
    }
};

// Get all Task controller
exports.getAllTaskHandler = async (req, res, next) => {
    try {
        const filters = { ...req.query };
        // exclude
        const excludeFields = ["search"];
        excludeFields.forEach((field) => delete filters[field]);

        if (req.query.search) {
            const searchQuery = req.query.search;
            filters.$or = [
                {
                    title: {
                        $regex: new RegExp(".*" + searchQuery + ".*", "i"),
                    },
                },
            ];
        }
        const result = await TaskModel.find(filters);

        if (result.length !== 0) {
            res.status(200).json({
                status: true,
                message: "Tasks found",
                result,
            });
        } else {
            res.status(500).json({
                status: false,
                message: "Operation failed",
                error: "task not found",
            });
        }
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "Operation failed",
            error: error.message,
        });
    }
};

// Get Single Task controller
exports.getSingleTaskHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const isValidId = mongoose.Types.ObjectId.isValid(id);

        if (!isValidId) {
            return res.status(400).json({
                status: false,
                message: "Invalid ID format",
            });
        } else {
            const result = await TaskModel.findById(id);
            if (result) {
                res.status(200).json({
                    status: true,
                    message: "Task found",
                    result,
                });
            } else {
                res.status(500).json({
                    status: false,
                    message: "Failed",
                    error: "Task not found",
                });
            }
        }
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "Failed",
            error: error.message,
        });
    }
};

// Update Task controller
exports.updateTaskHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const isValidId = mongoose.Types.ObjectId.isValid(id);

        if (!isValidId) {
            return res.status(400).json({
                status: false,
                message: "Invalid ID format",
            });
        } else {
            const result = await TaskModel.updateOne(
                { _id: id },
                { $set: req.body },
                { runValidators: true }
            );
            if (result.modifiedCount !== 0) {
                // Fetch the updated user information
                const updatedTask = await TaskModel.findById(id);
                res.status(200).json({
                    status: true,
                    message: "Task Updated",
                    result,
                    updatedTask,
                });
            } else {
                res.status(500).json({
                    status: false,
                    message: "Update Failed",
                    error: "Task not updated",
                });
            }
        }
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "Failed",
            error: error.message,
        });
    }
};

// Delete Single Task controller
exports.deleteSingleTaskHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const isValidId = mongoose.Types.ObjectId.isValid(id);

        if (!isValidId) {
            return res.status(400).json({
                status: false,
                message: "Invalid ID format",
            });
        } else {
            const result = await TaskModel.findByIdAndDelete(id);
            if (result) {
                res.status(200).json({
                    status: true,
                    message: "Task deleted",
                    result,
                });
            } else {
                res.status(500).json({
                    status: false,
                    message: "Failed",
                    error: "Task already deleted",
                });
            }
        }
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "Failed",
            error: error.message,
        });
    }
};
