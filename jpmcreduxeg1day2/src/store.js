import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import CounterReducer from "./reducers/CounterReducer";
import TodosReducer from "./reducers/TodosReducer";
import ApiMiddleware from "./middlewares/ApiMiddleware";
import LogMiddleware from "./middlewares/LogMiddleware";
import PostReducer from "./reducers/PostReducer";

const store = legacy_createStore(
  combineReducers({ counter: CounterReducer, todos: TodosReducer ,postForm:PostReducer}),
  applyMiddleware(ApiMiddleware,LogMiddleware)
);
export default store;
