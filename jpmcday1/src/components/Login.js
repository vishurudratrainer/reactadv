import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({setAuthenticated}) => {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

    const captureUsername=e =>setUsername(e.target.value)
    const capturePassword=e =>setPassword(e.target.value)


    const handleLogin = e =>{
        e.preventDefault()
        if(username.length > 0 && username===password){
            setAuthenticated(true)
            navigate("/todosaxios")
        }


    }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>
          Enter username <input onChange={captureUsername} />
        </label>
        <br />
        <label>
          Enter password <input type="password" onChange={capturePassword}/>
        </label>
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login
