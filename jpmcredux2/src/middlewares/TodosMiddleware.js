import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_TODOS,
  FETCH_TODOS_ID,
  FETCHED_TODOS,
  FETCHED_TODOS_ERROR,
  FETCH_DOG,
  FETCHED_DOG,
  FETCHED_DOG_ERROR,
  POST_FORM_DATA,
  POST_FORM_DATA_SUCCESS,
  POST_FORM_DATA_ERROR,
} from "../ActionType";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest(FETCH_TODOS, todoFetcherSaga);
  yield takeLatest(FETCH_TODOS_ID, todoIdFetcherSaga);
  yield takeLatest(FETCH_DOG, dogFetcherSaga);
  yield takeLatest(POST_FORM_DATA, postFormDataSaga);
}

function fetchTodo(todoId = "") {
  let url = "https://jsonplaceholder.typicode.com/todos/";
  if (todoId !== "") {
    url = url + "/" + todoId;
  }
  return axios({
    method: "get",
    url: url,
  });
}

function fetchDog() {
  let url = "https://dog.ceo/api/breeds/image/random";
  return axios({
    method: "get",
    url: url,
  });
}

function postFormData(data) {
  let url = "https://jsonplaceholder.typicode.com/posts/";
  return axios({
    method: "post",
    url: url,
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* todoFetcherSaga() {
  try {
    const response = yield call(fetchTodo);
    //call method is used for async calls
    const data = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: FETCHED_TODOS, data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: FETCHED_TODOS_ERROR, error });
  }
}

function* dogFetcherSaga() {
  try {
    const response = yield call(fetchDog);
    //call method is used for async calls
    const data = response.data.message;

    // dispatch a success action to the store with the new dog
    yield put({ type: FETCHED_DOG, dog: data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: FETCHED_DOG_ERROR, error });
  }
}

// worker saga: makes the api call when watcher saga sees the action
function* todoIdFetcherSaga(action) {
  try {
    const response = yield call(fetchTodo, action.todoId);
    //call method is used for async calls
    const data = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: FETCHED_TODOS, data: [data] });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: FETCHED_TODOS_ERROR, error });
  }
}

function* postFormDataSaga(action) {
  try {
    let formData = action.formData;
    const response = yield call(postFormData, formData);
    //call method is used for async calls
    const data = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: POST_FORM_DATA_SUCCESS, data: data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: POST_FORM_DATA_ERROR, error });
  }
}
