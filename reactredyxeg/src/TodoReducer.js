export default function TodoReducer( state = { todos: [],todoId:0 },action) {
  if (action) {
    if (action.type === "FETCHED_TODO") {
      return { ...state, todos: action.data };
    }
        if (action.type === "CAPTURE_TODO_ID") {
      return { ...state, todoId: action.todoId };
    }

  }
  return state;
}
