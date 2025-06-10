import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { FETCH_TODO, FETCH_TODO_ID, FETCHED_TODO } from "../ActionType";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest(FETCH_TODO, todoWorkerSaga);
  yield takeLatest(FETCH_TODO_ID, todoWorkerByIdSaga);
}

function fetchTodo(todoId = "") {
  if (todoId === "")
    return axios.get("https://jsonplaceholder.typicode.com/todos");
  else return axios.get("https://jsonplaceholder.typicode.com/todos/" + todoId);
}

function* todoWorkerSaga() {
  try {
    const response = yield call(fetchTodo);
    const data = response.data;
    yield put({ type: FETCHED_TODO, data: data });
  } catch (e) {}
}

function* todoWorkerByIdSaga(action) {
  try {
    const response = yield call(fetchTodo,action.todoId);
    const data = response.data;
    yield put({ type: FETCHED_TODO, data: data });
  } catch (e) {}
}
