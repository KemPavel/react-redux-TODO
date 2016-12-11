import { SAVE_TODOS } from '../constants/actionTypes';


export default store => next => action => {
  if (action.type === SAVE_TODOS) {
    localStorage.setItem("todos", JSON.stringify(action.todos));
  }
  next(action);
}
