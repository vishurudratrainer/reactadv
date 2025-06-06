import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { watcherSaga } from "./middlewares/TodosMiddleware";
import TodosReducer from "./reducers/TodosReducer";
import DogReducer from "./reducers/DogReducer";
import createSagaMiddleware from "redux-saga";
import PostReducer from "./reducers/PostReducer";

const sagaMiddleware = createSagaMiddleware();
const store = legacy_createStore(
  combineReducers({ todos: TodosReducer,dog:DogReducer,post:PostReducer }),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watcherSaga);

export default store;
