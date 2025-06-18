import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import CounterReducer from "./reducers/CounterReducer";
import TodoReducer from "./reducers/TodoReducer";
import { TodosMiddleware } from "./middlewares/TodosMiddleware";

const store = legacy_createStore(
  combineReducers({ counter: CounterReducer, todos: TodoReducer }),
  applyMiddleware(TodosMiddleware)
);

export default store;
