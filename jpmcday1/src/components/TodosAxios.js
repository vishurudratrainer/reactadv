import { useState } from "react";
import axios from "axios";
import StaticTable from "./DynamicTable";
const TodosAxios = ({authenticated}) => {
  const [todos, setTodos] = useState([]);
  //      data, setter------------initialData
  const handleFetchTodos = () =>
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => setTodos(response.data));
    if(authenticated)
  return (
    <div>
      <button onClick={handleFetchTodos}>Fetch Todos using Axios</button>
      <StaticTable rows={todos} columns={["id","userId","title","completed"]}/>
    </div>
  );
  else{
    return(<div>Please Login</div>)
  }
};

export default TodosAxios;
