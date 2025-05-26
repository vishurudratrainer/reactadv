export default function CountReducer( state = { count: 0 },action) {
  if (action) {
    if (action.type === "INC") {
      return { ...state, count: state.count + 1 };
    }
  }
  return state;
}
