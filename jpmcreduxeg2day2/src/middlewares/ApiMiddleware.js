import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_TODO,
  FETCH_TODO_ID,
  FETCHED_TODO,
  POST_FORM,
  POST_FORM_SUCCESS,
} from "../ActionType";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest(FETCH_TODO, todoWorkerSaga);
  yield takeLatest(FETCH_TODO_ID, todoWorkerByIdSaga);
  yield takeLatest(POST_FORM, postFormWorkerSaga);
}

function fetchTodo(todoId = "") {
  if (todoId === "")
    return axios.get("https://jsonplaceholder.typicode.com/todos");
  else return axios.get("https://jsonplaceholder.typicode.com/todos/" + todoId);
}

function postForm(data) {
  return axios("https://jsonplaceholder.typicode.com/posts", {
    body: JSON.stringify(data),
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
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
    const response = yield call(fetchTodo, action.todoId);
    const data = response.data;
    yield put({ type: FETCHED_TODO, data: data });
  } catch (e) {}
}

function* postFormWorkerSaga(action) {
  try {
    const response = yield call(postForm, action.form);
    const data = response.data;
    yield put({ type: POST_FORM_SUCCESS, result: data });
  } catch (e) {}
}
