import { FETCHED_TODO, FETCHED_TODO_BY_ID } from "../ActionType";
export default function TodoReducer(state = { todos: [] }, action) {
  if (action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case FETCHED_TODO:
        return { ...state, todos: action.data };
      case FETCHED_TODO_BY_ID:
        return { ...state, todos: action.data };
    }
  }
  return state;
}
