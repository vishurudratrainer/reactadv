import { useState } from "react";

import RestInstance from "../rest/RestInstance";
const TodosRestInstance = () => {
  const [todos, setTodos] = useState([]);
  //      data, setter------------initialData
  const handleFetchTodos = () =>
    RestInstance.get("todos/").then((response) => setTodos(response.data));

  return (
    <div>
      <button onClick={handleFetchTodos}>
        Fetch Todos using Rest Instance
      </button>
      <h1>{JSON.stringify(todos)}</h1>
    </div>
  );
};
export default TodosRestInstance;
