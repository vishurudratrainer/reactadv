import { legacy_createStore, combineReducers } from "redux";
import CountReducer from "./CountReducer";

const store = legacy_createStore(combineReducers({ count: CountReducer }));

export default store;
