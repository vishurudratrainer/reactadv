import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { watcherSaga } from "./sagas";
import DogReducer from "./DogReducer";
import TodosReducer from "./TodosReducer";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(
  combineReducers({ dog: DogReducer ,todos:TodosReducer}),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watcherSaga);
export default store;
