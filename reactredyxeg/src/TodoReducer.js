export default function TodoReducer( state = { todos: [] },action) {
  if (action) {
    if (action.type === "FETCHED_TODO") {
      return { ...state, todos: action.data };
    }
  }
  return state;
}
