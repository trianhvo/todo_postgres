const Todo = require('../models/todoModel');

class TodoService {
  constructor() {
    this.todos = [];
  }

  getAllTodos() {
    return this.todos;
  }

  getTodoById(id) {
    return this.todos.find(todo => todo.id === id);
  }

  createTodo(todoData) {
    const newTodo = new Todo(todoData);
    this.todos.push(newTodo);
    return newTodo;
  }

  updateTodo(id, todoData) {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    if (todoIndex !== -1) {
      const updatedTodo = { ...this.todos[todoIndex], ...todoData };
      this.todos[todoIndex] = updatedTodo;
      return updatedTodo;
    }
    return null;
  }

  deleteTodo(id) {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    if (todoIndex !== -1) {
      const deletedTodo = this.todos[todoIndex];
      this.todos.splice(todoIndex, 1);
      return deletedTodo;
    }
    return null;
  }
}

module.exports = TodoService;