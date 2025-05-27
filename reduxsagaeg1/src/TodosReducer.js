export default function TodosReducer(state = { todos: [], error: "" }, action) {
  if (action) {
    if (action.type === "FETCHED_TODO_SUCCESS") {
      return { ...state, todos: action.data };
    }
    if (action.type === "FETCHED_TODO_FAILURE") {
      return { ...state, error: action.error };
    }
  }
  return state;
}
