import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import CounterReducer from "./reducers/CounterReducer";
import TodoReducer from "./reducers/TodoReducer";
import { TodosMiddleware } from "./middlewares/TodosMiddleware";
import CommentsReducer from "./reducers/CommentsReducer";
import { CommentsMiddleware } from "./middlewares/CommentsMiddleware";

const store = legacy_createStore(
  combineReducers({
    counter: CounterReducer,
    todos: TodoReducer,
    comments: CommentsReducer,
  }),
  applyMiddleware(TodosMiddleware, CommentsMiddleware)
);

export default store;
