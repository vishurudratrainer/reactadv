import { useState } from "react";
import DynamicTable from "./DynamicTable";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function TodosSingle() {
  const {id}=useParams()
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
    axios
      .get("https://jsonplaceholder.typicode.com/todos/"+id)
      .then((response) => {
        let dataToShow = [response.data];
        setColumns(getColumns(dataToShow[0]));
        setTodos(dataToShow);
      });

  return (
    <div>
      <h1>Todos fetch example{id}</h1>
      <button onClick={fetchTodos}>Fetch Todos</button>
      <DynamicTable data={todos} columns={columns} />
    </div>
  );
}
