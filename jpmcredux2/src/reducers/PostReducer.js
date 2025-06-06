import { CAPTURE_FORM_DATA, POST_FORM_DATA_SUCCESS } from "../ActionType";

export default function PostReducer(
  state = { formData: { title: "", userId: "", body: "" }, result: {} },
  action
) {
  if (action) {
    if (action.type === CAPTURE_FORM_DATA) {
      let stateFormData = state.formData;
      let actionFormData = action.formData;
      return {
        ...state,
        formData: Object.assign({}, stateFormData, actionFormData),
      };
    }
    if (action.type === POST_FORM_DATA_SUCCESS) {
      return { ...state, result: action.data };
    }
  }
  return state;
}
