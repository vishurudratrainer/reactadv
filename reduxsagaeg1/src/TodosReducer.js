export default function TodosReducer(
  state = { todos: [], error: "", todoId: "" },
  action
) {
  if (action) {
    if (action.type === "FETCHED_TODO_SUCCESS") {
      return { ...state, todos: action.data };
    }
    if (action.type === "FETCHED_TODO_FAILURE") {
      return { ...state, error: action.error };
    }
    if (action.type === "CAPTURE_TODO_ID") {
      return { ...state, todoId: action.todoId };
    }
  }
  return state;
}
