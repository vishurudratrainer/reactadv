import { useState ,useMemo} from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component

export default function Todos() {
  const [todos, setTodos] = useState([]);

  const defaultColDef = useMemo(() => ({
    filter: true // Enable filtering on all columns
}))
  const [colDefs, setColDefs] = useState([
    { field: "id",filter:true },
    { field: "userId" },
    { field: "title" },
    { field: "completed" },
  ]);
  const fetchTodos = () =>
    fetch("https://jsonplaceholder.typicode.com/todos/ ")
      .then((data) => data.json())
      .then((data) => setTodos(data));

  return (
    <div>
      <button onClick={fetchTodos}>Fetch</button>
      <div style={{ height: 500 }}>
        <AgGridReact rowData={todos} columnDefs={colDefs} defaultColDef={defaultColDef}         pagination={true} // Enable Pagination
/>
      </div>
    </div>
  );
}
