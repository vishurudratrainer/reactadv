import { useState } from "react";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

const TodosMui = () => {
  const [todos, setTodos] = useState([]);
  const fetchTodo = () =>
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((res) => setTodos(res));
  return (
    <div>
      <Button variant="contained" onClick={fetchTodo}>
        FETCH TODO
      </Button>
      <Alert severity="success">{JSON.stringify(todos)}</Alert>{" "}
    </div>
  );
};

export default TodosMui;
