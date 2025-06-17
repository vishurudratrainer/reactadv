import { useState } from "react";
import TodosTable from "./TodosTable";
import CircularProgress from "@mui/material/CircularProgress";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchTodo = () => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((res) => res.json())
        .then((res) => {
            setLoading(false)
          setTodos(res);
        });
    },5000);
  };
  return (
    <div>
      <button onClick={fetchTodo}>FETCH TODO</button>
      <br/>
      {loading && <CircularProgress/>}
      <TodosTable todos={todos} />
    </div>
  );
};

export default Todos;
