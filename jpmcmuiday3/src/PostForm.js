import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

const PostForm = () => {
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState({});
  const capture = (e) => {
    let target = e.target;
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setResult(json));
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <TextField
          id="outlined-basic"
          label="Enter User Id"
          variant="outlined"
          name="userId"
          onChange={capture}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Enter Body"
          name="body"
          variant="outlined"
          onChange={capture}
        />

        <br />
        <TextField
          id="outlined-basic"
          label="Enter Title"
          name="title"
          variant="outlined"
          onChange={capture}
        />
        <br />
        <Button type="submit" variant="contained">Fetch Todos</Button>
      </form>
      <Alert severity="success">{JSON.stringify(result)} </Alert>
    </div>
  );
};
export default PostForm;