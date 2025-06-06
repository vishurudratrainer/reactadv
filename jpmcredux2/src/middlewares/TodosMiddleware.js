import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_TODOS,
  FETCH_TODOS_ID,
  FETCHED_TODOS,
  FETCHED_TODOS_ERROR,
} from "../ActionType";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest(FETCH_TODOS, todoFetcherSaga);
  yield takeLatest(FETCH_TODOS_ID, todoIdFetcherSaga);
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

// worker saga: makes the api call when watcher saga sees the action
function* todoIdFetcherSaga(action) {
  try {
    const response = yield call(fetchTodo, action.todoId);
    //call method is used for async calls
    const data = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: FETCHED_TODOS, data:[data] });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: FETCHED_TODOS_ERROR, error });
  }
}
