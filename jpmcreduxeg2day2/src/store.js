import { legacy_createStore,combineReducers,applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import TodosReducer from "./reducers/TodosReducer";
import { watcherSaga } from "./middlewares/ApiMiddleware";
const sagaMiddleware = createSagaMiddleware()

const store= legacy_createStore(combineReducers({todos:TodosReducer}),applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watcherSaga)
export default store
