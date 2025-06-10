import { legacy_createStore,combineReducers } from "redux";
import CounterReducer from "./reducers/CounterReducer";

const store=legacy_createStore(combineReducers({counter:CounterReducer}))
export default store