import { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos =()=> fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((data) => data.json())
    .then((data) => setTodos(data));

  return (
    <div>
      <button onClick={fetchTodos}>Fetch Todos</button>
      <p>{todos}</p>
    </div>
  );
};

export default Todos
