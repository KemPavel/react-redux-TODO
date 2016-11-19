import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  REMOVE_COMPLETED_TODOS
} from '../constants/actionTypes';


export default function todosReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {
        text: action.text,
        completed: false,
        id: action.id
      }];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case REMOVE_COMPLETED_TODOS:
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
}

