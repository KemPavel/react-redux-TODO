import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilterReducer';
import todos from './todosReducer';


const rootReducer = combineReducers({
  visibilityFilter,
  todos
});

export default rootReducer;