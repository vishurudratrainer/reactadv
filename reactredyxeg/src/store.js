import { legacy_createStore } from "redux";
import CountReducer from "./CountReducer";

const store=legacy_createStore(CountReducer)

export default store