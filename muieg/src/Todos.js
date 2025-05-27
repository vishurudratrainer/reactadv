import Button from "@mui/material/Button";
import { useState } from "react";
import Table from "./Table";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const fetchTodos = () =>
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((data) => data.json())
      .then((data) => setTodos(data));
  return (
    <div>
      <Button variant="contained" onClick={fetchTodos}>
        Fetch Todos
      </Button>
      <Table rows={todos}/>
    </div>
  );
}
