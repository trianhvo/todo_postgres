const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/todoController');

// Create a new instance of the TodoController
const todoController = new TodoController();

// GET /todos - Retrieve all todos
router.get('/todos', todoController.getTodos);

// GET /todos/:id - Retrieve a specific todo by its ID
router.get('/todos/:id', todoController.getTodoById);

// POST /todos - Create a new todo
router.post('/todos', todoController.createTodo);

// PUT /todos/:id - Update an existing todo
router.put('/todos/:id', todoController.updateTodo);

// DELETE /todos/:id - Delete a todo
router.delete('/todos/:id', todoController.deleteTodo);

module.exports = router;