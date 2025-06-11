import { useState } from "react";
import CustomGrid from "./CustomGrid";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const columns = [
    { field: "id" },
    { field: "todoId" },
    { field: "title" },
    { field: "completed" },
  ];
  const handleTodo = () =>
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((data) => setTodos(data));

  return (
    <div>
      <button onClick={handleTodo}>Fetch Todo</button>
      <CustomGrid data={todos} columns={columns} />
    </div>
  );
};
export default Todos;
