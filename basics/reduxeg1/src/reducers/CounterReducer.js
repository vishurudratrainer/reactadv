import { INC, DEC } from "../ActionType";

export default function CounterReducer(state = { count: 0 }, action) {
  if (action) {
    if (action.type === INC) {
      return { ...state, count: state.count + 1 };
    }

    if (action.type === DEC) {
      return { ...state, count: state.count - 1 };
    }
  }
  return state;
}
