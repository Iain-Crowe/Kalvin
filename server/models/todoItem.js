const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
});

const todoItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: "",
    },
    status: {
        type: String,
        enum: ["todo", "in progress", "completed"],
        default: "todo",
    },
    priority: {
        type: Number,
        min: 0,
        max: 2,
        default: 1,
    },
    dueDate: {
        type: Date,
    },
    tags: {
        type: [tagSchema],
        validate: [arrayLimit, "{PATH} exceeds the limit of 3"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
});

function arrayLimit(val) {
    return val.length <= 3;
}

module.exports = mongoose.model('TodoItems', todoItemSchema);