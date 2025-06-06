import { CAPTURE_TODOS_ID, FETCHED_TODOS } from "../ActionType";

export default function TodosReducer(state = { todosData: [],todoId:"" }, action) {
  if (action) {
    if (action.type === FETCHED_TODOS) {
      return { ...state, todosData: action.data };
    }
    if(action.type===CAPTURE_TODOS_ID){
        return {...state,todoId:action.todoId}
    }
  }
  return state;
}
