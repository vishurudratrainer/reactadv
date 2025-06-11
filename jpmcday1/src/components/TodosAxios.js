import { useState } from "react";
import axios from "axios";
import StaticTable from "./DynamicTable";
import ThemeContext from"../context/ThemeContext";
import { useContext } from "react";
const TodosAxios = ({authenticated}) => {
  const themeContext=useContext(ThemeContext)
  const [todos, setTodos] = useState([]);
  //      data, setter------------initialData
  const handleFetchTodos = () =>
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => setTodos(response.data));
    if(authenticated)
  return (
    <div>
      <h1>{themeContext.color}</h1>
      <button style={{background:themeContext.color}} onClick={handleFetchTodos} id="fetchaxiosbutton">Fetch Todos using Axios</button>
      <StaticTable rows={todos} columns={["id","userId","title","completed"]}/>
    </div>
  );
  else{
    return(<div>Please Login</div>)
  }
};

export default TodosAxios;
