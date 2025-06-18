import { INC, DEC } from "../ActionType";

export default function CounterReducer(state = { counter: 0 }, action) {
  if (action) {
    if (action.type === INC) {
      return { ...state, counter: state.counter + 1 };
    }

    if (action.type === DEC) {
      return { ...state, counter: state.counter - 1 };
    }
  }
  return state;
}
