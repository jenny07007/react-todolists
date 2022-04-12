import React, { Component } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";

export class TodoList extends Component {
  state = { todos: [] };

  addItem = (task) => {
    this.setState({
      todos: [...this.state.todos, task],
    });
  };

  deleteItem = (id) => {
    this.setState({
      todos: this.state.todos.filter((task) => task.id !== id),
    });
  };

  updateItem = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map((todo) => {
      return todo.id === id ? { ...todo, task: updatedTask } : todo;
    });
    this.setState({ todos: updatedTodos });
  };

  toggleCompletion = (id) => {
    const updatedTodos = this.state.todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    this.setState({ todos: updatedTodos });
  };

  render() {
    const todos = this.state.todos.map(
      (todo) =>
        todo.task &&
        todo.id && (
          <li key={todo.id}>
            <Todo
              id={todo.id}
              task={todo.task}
              completed={todo.completed}
              handleDeleteItem={() => this.deleteItem(todo.id)}
              handleCompletion={() => this.toggleCompletion(todo.id)}
              handleUpdateItem={this.updateItem.bind(this)}
            />
          </li>
        ),
    );

    return (
      <div className="todo-bk">
        <div>
          <div className="todo-title">
            <h2>Todo List</h2>
            <p>A simple React Todo List App</p>
          </div>
          <ul>{todos}</ul>
        </div>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}
