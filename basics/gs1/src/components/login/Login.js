import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsUserAuth }) => {
  const [formData, setFormData] = useState({ user: "", password: "" });

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    if (formData.user === formData.password) {
      setIsUserAuth(true);
      navigate("/counter");
    }
  };

  const capture = (e) => {
    let propertyName = e.target.name;
    let propertyValue = e.target.value;
    setFormData({ ...formData, [propertyName]: propertyValue });
  };

  return (
    <div>
      <form onSubmit={login}>
        <label>
          Enter user <input name="user" onChange={capture} />
        </label>
        <br />
        <label>
          Enter password{" "}
          <input name="password" type="password" onChange={capture} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
