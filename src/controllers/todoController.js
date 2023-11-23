const TodoService = require('../services/todoService');

class TodoController {
  static async getTodos(req, res) {
    try {
      const todos = await TodoService.getAllTodos();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async getTodoById(req, res) {
    try {
      const { id } = req.params;
      const todo = await TodoService.getTodoById(id);
      if (todo) {
        res.status(200).json(todo);
      } else {
        res.status(404).json({ error: 'Todo not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async createTodo(req, res) {
    try {
      const { title, completed } = req.body;
      const newTodo = await TodoService.createTodo({
        title,
        completed,
      });
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async updateTodo(req, res) {
    try {
      const { id } = req.params;
      const { title, completed } = req.body;
      const updatedTodo = await TodoService.updateTodo(id, {
        title,
        completed,
      });
      if (updatedTodo) {
        res.status(200).json(updatedTodo);
      } else {
        res.status(404).json({ error: 'Todo not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async deleteTodo(req, res) {
    try {
      const { id } = req.params;
      const deletedTodo = await TodoService.deleteTodo(id);
      if (deletedTodo) {
        res.status(200).json({ message: 'Todo deleted successfully' });
      } else {
        res.status(404).json({ error: 'Todo not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = TodoController;