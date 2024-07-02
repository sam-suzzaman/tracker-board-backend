const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Task title is required"],
            trim: true,
            minLength: [5, "Title is too short(min 5char)"],
            maxLength: [100, "Title is too long(max 100char)"],
        },
        description: {
            type: String,
            required: [true, "Task description is required"],
            trim: true,
            minLength: [10, "Description is too short(min 10char)"],
            maxLength: [250, "Description is too long(max 250char)"],
        },
        status: {
            type: String,
            enum: {
                values: ["in-progress", "complete"],
                message: `Status can't be {VALUE}`,
            },
            default: "in-progress",
        },
    },
    { timestamps: true }
);

// Creating Model
const TaskModel = mongoose.model("Task", taskSchema);
module.exports = TaskModel;
