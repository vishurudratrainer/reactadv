import { useState } from "react";
import axios from "axios";
const TodosAxios = () => {
  const [todos, setTodos] = useState([]);
  //      data, setter------------initialData
  const handleFetchTodos = () =>
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => setTodos(response.data));

  return (
    <div>
      <button onClick={handleFetchTodos}>Fetch Todos</button>
      <h1>{JSON.stringify(todos)}</h1>
    </div>
  );
};

export default TodosAxios;
