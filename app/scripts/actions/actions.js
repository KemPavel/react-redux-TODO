import * as actionTypes from '../constants/actionTypes';

export function addTodo(text, id) {
  return {
    type: actionTypes.ADD_TODO,
    text,
    id
  }
}

export function toggleTodo(id) {
  return {
    type: actionTypes.TOGGLE_TODO,
    id
  }
}

export function removeTodo(id) {
  return {
    type: actionTypes.REMOVE_TODO,
    id
  }
}

export function removeCompletedTodos() {
  return {
    type: actionTypes.REMOVE_COMPLETED_TODOS
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: actionTypes.SET_VISIBILITY_FILTER,
    filter
  }
}

export function saveTodos(todos) {
  return {
    type: actionTypes.SAVE_TODOS,
    todos
  }
}
