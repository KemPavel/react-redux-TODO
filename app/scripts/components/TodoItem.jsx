import React from 'react';


var TodoItem = React.createClass({

  propTypes: {
    removeTodo: React.PropTypes.func.isRequired,
    toggleTodo: React.PropTypes.func.isRequired,
    todo: React.PropTypes.object.isRequired
  },

  handleToggleTodoClick() {
    this.props.toggleTodo(this.props.todo.id);
  },

  handleRemoveTodoClick(e) {
    e.stopPropagation();
    this.props.removeTodo(this.props.todo.id);
  },

  render() {
    let itemNameClasses = this.props.todo.completed ? 'todo-item__name todo-item__name--disabled' : 'todo-item__name';

    return (
      <li className="todo-item" onClick={this.handleToggleTodoClick}>
        <span className={itemNameClasses}>{this.props.todo.text}</span>
        <span className="todo-item__delete-button" onClick={this.handleRemoveTodoClick}>×</span>
      </li>
    );
  }

});

export default TodoItem;