import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import CounterReducer from "./reducers/CounterReducer";
import TodosReducer from "./reducers/TodosReducer";
import ApiMiddleware from "./middlewares/ApiMiddleware";

const store = legacy_createStore(
  combineReducers({ counter: CounterReducer, todos: TodosReducer }),
  applyMiddleware(ApiMiddleware)
);
export default store;
