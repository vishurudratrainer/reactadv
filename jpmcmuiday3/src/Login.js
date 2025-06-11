import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { useState } from "react";
export default function Login() {
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState({});
  const capture = (e) => {
    let target = e.target;
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (formData.username == formData.password) {
      setResult({ success: true });
    }
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <TextField
          id="outlined-basic"
          label="Enter user name"
          variant="outlined"
          name="username"
          onChange={capture}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Enter Password"
          name="password"
          variant="outlined"
          onChange={capture}
          type="password"
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
      <Alert severity="success">{JSON.stringify(result)} </Alert>
      <Alert severity="success">{JSON.stringify(formData)} </Alert>
    </div>
  );
}
