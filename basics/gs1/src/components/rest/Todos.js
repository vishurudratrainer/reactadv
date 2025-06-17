import { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const fetchTodo = () =>
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((res) => setTodos(res));
  return (
    <div>
      <button onClick={fetchTodo}>FETCH TODO</button>
      <h1>{JSON.stringify(todos)}</h1>
    </div>
  );
};

export default Todos
