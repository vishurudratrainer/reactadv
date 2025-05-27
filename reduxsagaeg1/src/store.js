import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { watcherSaga } from "./sagas";
import DogReducer from "./DogReducer";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(
  combineReducers({ dog: DogReducer }),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watcherSaga);
export default store;
