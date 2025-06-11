import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_DOG,
  FETCH_TODO,
  FETCH_TODO_ID,
  FETCHED_DOG,
  FETCHED_TODO,
  LOGIN,
  LOGIN_SUCCESS,
  POST_FORM,
  POST_FORM_SUCCESS,
} from "../ActionType";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {

  yield takeLatest(FETCH_TODO, todoWorkerSaga);
  yield takeLatest(FETCH_TODO_ID, todoWorkerByIdSaga);
  yield takeLatest(POST_FORM, postFormWorkerSaga);
  yield takeLatest(FETCH_DOG, dogFetcherSaga);
  yield takeLatest(LOGIN, loginWorkerSaga);
}

function fetchTodo(url, todoId = "") {
  if (todoId === "") return axios.get(url);
  else return axios.get(url + todoId);
}

function postForm(data) {
  return axios.post("https://jsonplaceholder.typicode.com/posts", 
  JSON.stringify(data),{
    headers: { "Content-Type": "application/json" },
  });
}
function loginForm(data) {
  console.log("data", data);
  return axios.post("https://dummyjson.com/auth/login", JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
function* todoWorkerSaga() {
  try {
    const response = yield call(
      fetchTodo,
      "https://jsonplaceholder.typicode.com/todos"
    );
    const data = response.data;
    yield put({ type: FETCHED_TODO, data: data });
  } catch (e) {}
}

function* dogFetcherSaga() {
  try {
    const response = yield call(
      fetchTodo,
      "https://dog.ceo/api/breeds/image/random"
    );
    const data = response.data.message;
    yield put({ type: FETCHED_DOG, data: data });
  } catch (e) {}
}

function* todoWorkerByIdSaga(action) {
  try {
    const response = yield call(
      fetchTodo,
      "https://jsonplaceholder.typicode.com/todos",
      action.todoId
    );
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

function* loginWorkerSaga(action) {
  try {
    console.log(action.data);
    const response = yield call(loginForm, action.data);
    const data = response.data;
    yield put({ type: LOGIN_SUCCESS, token: data.accessToken });
  } catch (e) {}
}
