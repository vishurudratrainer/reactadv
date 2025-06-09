import { useState } from "react";

const TodosFetch = () => {
  const [todos, setTodos] = useState([]);
  //      data, setter------------initialData
  const handleFetchTodos = () =>
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((data) => setTodos(data));

  return (
    <div>
      <button onClick={handleFetchTodos}>Fetch Todos</button>
      <h1>{JSON.stringify(todos)}</h1>
    </div>
  );
};

export default TodosFetch;
