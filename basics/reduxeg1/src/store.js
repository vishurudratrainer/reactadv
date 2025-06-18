import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import CounterReducer from "./reducers/CounterReducer";
import TodoReducer from "./reducers/TodoReducer";
import { TodosMiddleware } from "./middlewares/TodosMiddleware";
import CommentsReducer from "./reducers/CommentsReducer";
import { CommentsMiddleware } from "./middlewares/CommentsMiddleware";
import DogReducer from "./reducers/DogReducer";
import { DogMiddleware } from "./middlewares/DogMiddleware";

const store = legacy_createStore(
  combineReducers({
    counter: CounterReducer,
    todos: TodoReducer,
    comments: CommentsReducer,
    dogs:DogReducer
  }),
  applyMiddleware(TodosMiddleware, CommentsMiddleware,DogMiddleware)
);

export default store;
