import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { watcherSaga } from "./middlewares/TodosMiddleware";
import TodosReducer from "./reducers/TodosReducer";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = legacy_createStore(
  combineReducers({ todos: TodosReducer }),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watcherSaga);

export default store;
