import React from 'react';

import TodoHeader from './../components/TodoHeader.jsx';
import TodoForm from './../components/TodoForm.jsx';
import TodoList from './../components/TodoList.jsx';
import TodoFooter from './../components/TodoFooter.jsx';

let id = 1;

var TodoApp = React.createClass({

  propTypes: {
    children: React.PropTypes.node
  },

  getInitialState() {
    return ({
      todos: JSON.parse(localStorage.getItem("todos")) || [],
      visibility: 'all'
    });
  },

  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  },

  getCompletedTodos() {
    return this.state.todos.filter((todo) => {
      return todo.completed;
    });
  },

  getActiveTodos() {
    return this.state.todos.filter((todo) => {
      return !todo.completed;
    });
  },

  handleAddTodo(value) {
    let todos = this.state.todos.slice();
    const todo = {
      id: id++,
      text: value,
      completed: false
    };
    todos.push(todo);
    this.setState({
      todos
    });
  },

  handleToggleTodo(id) {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos
    });
  },

  handleRemoveTodo(id) {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  },

  handleShowAll() {
    this.setState({
      visibility: 'all'
    });
  },

  handleShowActive() {
    this.setState({
      visibility: 'active'
    });
  },

  handleShowCompleted() {
    this.setState({
      visibility: 'completed'
    });
  },

  handleDeleteCompleted() {
    const todos = this.state.todos.filter((todo) => {
      return !todo.completed;
    });
    this.setState({
      todos
    });
  },

  render() {
    let todos;
    const activeTodos = this.getActiveTodos();
    switch (this.state.visibility) {
      case 'active':
        todos = activeTodos;
        break;
      case 'completed':
        todos = this.getCompletedTodos();
        break;
      case 'all':
      default:
        todos = this.state.todos;
        break;
    }
    return (
      <div className="container">
        <TodoHeader todosAmount={activeTodos.length} />
        <TodoForm addTodo={this.handleAddTodo} />
        <TodoList todos={todos} removeTodo={this.handleRemoveTodo} toggleTodo={this.handleToggleTodo} />
        <TodoFooter activeTab={this.state.visibility} showAll={this.handleShowAll} showActive={this.handleShowActive} showCompleted={this.handleShowCompleted} deleteCompleted={this.handleDeleteCompleted} />
      </div>
    );
  }

});

export default TodoApp;