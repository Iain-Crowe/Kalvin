const asyncHandler = require("express-async-handler");
const { ObjectId } = require("mongodb");

const TodoItem = require("../models/todoItem");

// @desc    Add Todo Item
// @route   POST /api/todo/add
const addTodoItem = asyncHandler(async (req, res) => {
    try {
        const todoItem = new TodoItem({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            priority: req.body.priority,
            dueDate: req.body.dueDate,
            tags: req.body.tags,
            owner: req.body.user,
        });

        await todoItem.save();

        res.status(201).send("Item added successfully.");
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// @desc    Add Todo Item
// @route   POST /api/todo/get
const getTodoItems = asyncHandler(async (req, res) => {
    const todoItems = await TodoItem.find({
        owner: ObjectId(req.query.owner)
    }).exec();

    res.status(200).json(todoItems);
});

module.exports = {
    addTodoItem,
    getTodoItems,
};
