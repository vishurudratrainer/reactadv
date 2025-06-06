import { FETCHED_TODOS } from "../ActionType";

export default function TodosReducer(state = { todosData: [] }, action) {
  if (action) {
    if (action.type === FETCHED_TODOS) {
      return { ...state, todosData: action.data };
    }
  }
  return state;
}
