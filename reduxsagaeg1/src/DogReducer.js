export default function DogReducer(state = { message: "", error: "" }, action) {
  if (action) {
    if (action.type === "FETCHED_DOGS_SUCCESS") {
      return { ...state, message: action.dog };
    }
    if (action.type === "FETCHED_DOGS_FAILURE") {
      return { ...state, error: action.error };
    }
  }
  return state;
}
