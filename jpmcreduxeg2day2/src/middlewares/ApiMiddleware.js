import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { FETCH_TODO, FETCHED_TODO } from "../ActionType";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest(FETCH_TODO, todoWorkerSaga);
}

function fetchTodo() {
  return axios.get("https://jsonplaceholder.typicode.com/todos");
}

function* todoWorkerSaga() {
  try {
    const response = yield call(fetchTodo);
    const data = response.data;
    yield put({ type: FETCHED_TODO, data: data });
  } catch (e) {}
}
