import { CAPTURE_LOGIN, LOGIN_SUCCESS } from "../ActionType";

const LogReducer = (
  state = { username: "", password: "", token: "" },
  action
) => {
  if (action) {
    if (action.type === LOGIN_SUCCESS) {
      return { ...state, token: action.token };
    } else {
      if (action.type === CAPTURE_LOGIN) {
        let formData = action.form;
        if (formData["username"])
          return { ...state, username: formData.username };
        else if (formData["password"])
          return { ...state, password: formData.password };
      }
    }
  }
  return state;
};

export default LogReducer;
