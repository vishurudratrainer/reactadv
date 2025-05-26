import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import CountReducer from "./CountReducer";
import TodoReducer from "./TodoReducer";
import { TodosMiddleware } from "./TodosMiddleware";

const store = legacy_createStore(
  combineReducers({ count: CountReducer, todos: TodoReducer }),
  applyMiddleware(TodosMiddleware)
);

export default store;
