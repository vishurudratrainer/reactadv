import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import UserContext from "../context/UserContext";
export default function Login(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const performLogin = (e) => {
    e.preventDefault();
    if (username.length > 0 && username === password) {
      authContext.setToken(true);
      userContext.setUser(username);
      navigate("/counter");
    }
  };
  const captureUsername = (e) => setUserName(e.target.value);
  const capturePassword = (e) => setPassword(e.target.value);
  return (
    <div>
      <form onSubmit={performLogin}>
        <label>
          Enter username <input required onChange={captureUsername} />
        </label>
        <br />
        <label>
          Enter password{" "}
          <input type="password" required onChange={capturePassword} />
        </label>
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}
