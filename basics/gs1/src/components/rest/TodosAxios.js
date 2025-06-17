import { useState } from "react";
import TodosTable from "./TodosTable";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import Profile from "../profile/Profile";
const TodosAxios = ({username}) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchTodo = () => {
    setLoading(true);
    setTimeout(() => {
      axios.get("https://jsonplaceholder.typicode.com/todos/").then((res) => {
        setLoading(false);
        setTodos(res.data);
      });
    }, 5000);
  };
  return (
    <div>
      <Profile username={username}/>
      <button onClick={fetchTodo}>FETCH TODO</button>
      <br />
      {loading && <CircularProgress />}
      <TodosTable todos={todos} />
    </div>
  );
};

export default TodosAxios;
