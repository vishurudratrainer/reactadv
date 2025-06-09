import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const TodosFetch = () => {
  const userContext =useContext(UserContext)
  const [todos, setTodos] = useState([]);
  //      data, setter------------initialData
  const handleFetchTodos = () =>
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((data) => setTodos(data));

  return (
    <div>
      <h1>Welcome {userContext.username}</h1>
      <button onClick={handleFetchTodos}>Fetch Todos</button>
      <h1>{JSON.stringify(todos)}</h1>
    </div>
  );
};

export default TodosFetch;
