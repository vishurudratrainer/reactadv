import Button from "@mui/material/Button";
import { useState } from "react";
import Table from "./Table";
import CircularProgress from "@mui/material/CircularProgress";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchTodos = () => setIsLoading(true);
  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((data) => data.json())
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
      });
  }, 10000);

  return (
    <div>
      <Button variant="contained" onClick={fetchTodos}>
        Fetch Todos
      </Button>
      <br />
      {isLoading && <CircularProgress hidden={true} />}
      <Table rows={todos} />
    </div>
  );
}
