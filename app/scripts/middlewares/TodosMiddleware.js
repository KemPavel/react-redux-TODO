import { SAVE_DATA_TO_LOCAL_STORAGE } from '../constants/actionTypes';


export default store => next => action => {
  if (action.type === SAVE_DATA_TO_LOCAL_STORAGE) {
    localStorage.setItem("todos", JSON.stringify(action.todos));
    localStorage.setItem("id", JSON.stringify(action.id));
  }
  next(action);
}
