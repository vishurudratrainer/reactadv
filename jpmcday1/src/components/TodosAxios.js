import { useState } from "react";
import axios from "axios";
import StaticTable from "./StaticTable";
const TodosAxios = () => {
  const [todos, setTodos] = useState([]);
  //      data, setter------------initialData
  const handleFetchTodos = () =>
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => setTodos(response.data));

  return (
    <div>
      <button onClick={handleFetchTodos}>Fetch Todos using Axios</button>
      <StaticTable rows={todos} columns={["id","userId","title","completed"]}/>
    </div>
  );
};

export default TodosAxios;
