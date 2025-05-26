import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import LoggedInContext from "./LoggedInContext";
import UserContext from "./UserContext";
export default function Login(props) {
 const loggedInContext = useContext(LoggedInContext)
 const userContext = useContext(UserContext)
 const {setLoggedIn} =loggedInContext
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const captureUsername = (e) => setUsername(e.target.value);
  const capturePassword = (e) => setPassword(e.target.value);
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    if (username === password && username.length > 0) {
      setLoggedIn(true);
      userContext.setLogUserName(username)
      navigate("/todos1", { state: { username: username, date: new Date() } });
    }
  };

  return (
    <div>
      <form onSubmit={login}>
        <label>
          Enter username <input onChange={captureUsername} />
        </label>
        <br />
        <label>
          Enter password <input type="password" onChange={capturePassword} />
        </label>
        <br />
        <button type="submit"> Login</button>
      </form>
    </div>
  );
}
