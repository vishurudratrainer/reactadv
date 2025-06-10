import { CAPTURE_ID, FETCHED_TODO } from "../ActionType";

const TodosReducer = (state = { todos: [], todoId: "" }, action) => {
  if (action) {
    if (action.type === FETCHED_TODO) {
      return { ...state, todos: action.data };
    }
    if (action.type === CAPTURE_ID) {
      return { ...state, todoId: action.todoId };
    }
  }
  return state;
};

export default TodosReducer;
