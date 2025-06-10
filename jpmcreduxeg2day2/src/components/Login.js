import { useSelector, useDispatch } from "react-redux";
import { CAPTURE_LOGIN, LOGIN } from "../ActionType";

const Login = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.login);
  const performLogin = (e) => {
    e.preventDefault();
    dispatch({
      type: LOGIN,
      data: { username: data.username, password: data.password },
    });
  };
  const capture = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: CAPTURE_LOGIN, form: { [name]: value } });
  };
  return (
    <div>
      <form onSubmit={performLogin}>
        <label>
          Enter username <input name="username" onChange={capture} />{" "}
        </label>
        <br />
        <label>
          Enter password <input name="password" type="password" onChange={capture} />{" "}
        </label>
        <br />
        <button type="submit">Login</button>{" "}
      </form>{" "}
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
};

export default Login
