import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { FETCH_TODOS, FETCHED_TODOS, FETCHED_TODOS_ERROR } from "../ActionType";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest(FETCH_TODOS, todoFetcherSaga);

}


function fetchTodo() {
  return axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos/",
  });
}


// worker saga: makes the api call when watcher saga sees the action
function* todoFetcherSaga() {
  try {
    const response = yield call(fetchTodo);
    //call method is used for async calls
    const data = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type:FETCHED_TODOS , data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: FETCHED_TODOS_ERROR, error });
  }
}
