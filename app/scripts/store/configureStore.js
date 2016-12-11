import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';

import TodosMiddleware from '../middlewares/TodosMiddleware';

let store = createStore(rootReducer, applyMiddleware(TodosMiddleware));

export default store;
