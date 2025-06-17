import { useState } from "react";
import TodosTable from "./TodosTable";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const fetchTodo = () =>
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((res) => setTodos(res));
  return (
    <div>
      <button onClick={fetchTodo}>FETCH TODO</button>
      <TodosTable todos={todos}/>
    </div>
  );
};

export default Todos
