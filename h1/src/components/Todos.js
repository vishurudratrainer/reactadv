import { useState } from "react";
import DynamicTable from "./DynamicTable";
import RestApiInstance from "../resthelper/RestApiInstance";
import { useErrorBoundary } from "react-error-boundary";
export default function Todos() {
  const {showBoundary}=useErrorBoundary()
  const [todos, setTodos] = useState([]);
  const [columns, setColumns] = useState([]);
  const getColumns = (data) => {
    let header = [];
    for (let property in data) {
      header.push(property);
    }
    return header;
  };

  const fetchTodos = () =>
    /** fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((res) => {
        setColumns(getColumns(res[0]));
        setTodos(res);
      }); */
    RestApiInstance
      .get("//todos/")
      .then((response) => {
        let dataToShow = response.data;
        setColumns(getColumns(dataToShow[0]));
        setTodos(dataToShow);
      }).catch(error =>{showBoundary(error)});

  return (
    <div>
      <h1>Todos fetch example</h1>
      <button onClick={fetchTodos}>Fetch Todos</button>
      <DynamicTable data={todos} columns={columns} />
    </div>
  );
}
