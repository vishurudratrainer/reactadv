import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import CounterReducer from "./reducers/CounterReducer";
import { TodosMiddleware } from "./middlewares/TodosMiddleware";
import TodosReducer from "./reducers/TodosReducer";

const store = legacy_createStore(
  combineReducers({ counter: CounterReducer, todos: TodosReducer }),
  applyMiddleware(TodosMiddleware)
);

export default store;
