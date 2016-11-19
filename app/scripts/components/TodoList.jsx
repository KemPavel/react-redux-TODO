import React from 'react';

import TodoItem from './TodoItem.jsx';


var TodoList = React.createClass({

  propTypes: {
    items: React.PropTypes.array,
    removeTodo: React.PropTypes.func.isRequired,
    toggleTodo: React.PropTypes.func.isRequired
  },

  handleToggleTodo(id) {
    this.props.toggleTodo(id);
  },

  handleRemoveTodo(id) {
    this.props.removeTodo(id);
  },

  render() {
    return (
      <ul className="todos-list">
        {this.props.todos.map((todo) => {
          return (
            <TodoItem todo={todo} key={todo.id} removeTodo={this.handleRemoveTodo} toggleTodo={this.handleToggleTodo} />
          );
        })}
      </ul>
    );
  }

});

export default TodoList;