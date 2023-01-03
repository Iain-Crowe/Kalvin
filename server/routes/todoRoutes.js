const express = require("express");
const router = express.Router();

const { addTodoItem, getTodoItems } = require("../controllers/todoApi");

router.post("/add", addTodoItem);
router.get("/get", getTodoItems);

module.exports = router;
