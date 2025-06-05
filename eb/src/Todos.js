import { useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
const Todos = () => {
  const [todos, setTodos] = useState([]);
  const { showBoundary } = useErrorBoundary();
  const fetchTodos = () => {
    try {
      fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((data) => data.json())
        .then((data) => setTodos(data))
        .catch((error) => showBoundary(error));
    } catch (error) {
      showBoundary(error);
    }
  };

  return (
    <div>
      <button onClick={fetchTodos}>Fetch Todos</button>
      <p>{(todos)}</p>
    </div>
  );
};

export default Todos;
