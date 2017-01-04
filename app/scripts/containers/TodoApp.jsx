import React from 'react';
import { connect } from 'react-redux';
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from '../constants/visibilityFiltersTypes';
import {
  addTodo,
  toggleTodo,
  removeTodo,
  removeCompletedTodos,
  setVisibilityFilter,
  saveDataToLocalStorage
} from '../actions/actions';

import TodoHeader from './../components/TodoHeader.jsx';
import TodoForm from './../components/TodoForm.jsx';
import TodoList from './../components/TodoList.jsx';
import TodoFooter from './../components/TodoFooter.jsx';

let id = JSON.parse(localStorage.getItem("id")) || 1;

var TodoApp = React.createClass({

  propTypes: {
    dispatch: React.PropTypes.func.isRequired,
    todos: React.PropTypes.array.isRequired,
    visibilityFilter: React.PropTypes.string.isRequired
  },

  componentDidUpdate() {
    this.props.dispatch(saveDataToLocalStorage(this.props.todos, id));
  },

  handleAddTodo(text) {
    this.props.dispatch(addTodo(text, id++));
  },

  handleToggleTodo(id) {
    this.props.dispatch(toggleTodo(id));
  },

  handleRemoveTodo(id) {
    this.props.dispatch(removeTodo(id));
  },

  handleDeleteCompleted() {
    this.props.dispatch(removeCompletedTodos());
  },

  setVisibilityFilter(filter) {
    this.props.dispatch(setVisibilityFilter(filter));
  },

  getVisibleTodos(todos, filter) {
    switch (filter) {
      case SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed);
      case SHOW_COMPLETED:
        return todos.filter(todo => todo.completed);
      case SHOW_ALL:
      default:
        return todos;
    }
  },

  render() {
    const { todos, visibilityFilter } = this.props;
    return (
      <div className="container">
        <TodoHeader todosNumber={todos.filter(todo => !todo.completed).length} />
        <TodoForm addTodo={this.handleAddTodo} />
        <TodoList
          todos={this.getVisibleTodos(todos, visibilityFilter)}
          removeTodo={this.handleRemoveTodo}
          toggleTodo={this.handleToggleTodo}
        />
        <TodoFooter filter={this.props.visibilityFilter}
          setVisibilityFilter={this.setVisibilityFilter}
          deleteCompleted={this.handleDeleteCompleted}
        />
      </div>
    );
  }

});

function mapStateToProps(state) {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  };
}

export default connect(mapStateToProps)(TodoApp);
