import { useState } from "react";
import TextField from "@mui/material/TextField";
import Table from "./Table";
import Button from "@mui/material/Button";

export default function TodosById() {
  const [todoId, setTodoId] = useState(0);
  const [todo, setTodo] = useState([]);

  const onChange = (e) => setTodoId(e.target.value);
  const onFetch = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/"+todoId)
      .then((data) => data.json())
      .then((data) => setTodo([data]));
  };
  return (
    <div>
      <TextField
        id="todoId"
        label="Enter Todo Id"
        variant="outlined"
        onChange={onChange}
      />
      <br />
      <Button id="fetchTodoById" variant="contained" onClick={onFetch}>
        Fetch Todo by Id
      </Button>
      <Table rows={todo} />
    </div>
  );
}
