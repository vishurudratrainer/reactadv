import Button from "@mui/material/Button";
import { useState } from "react";
import CustomGrid from "./CustomGrid";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((data) => data.json())
      .then((data) => setTodos(data));
  };
  return (
    <div>
      <Button variant="contained" onClick={fetchTodos}>
        Fetch Todos
      </Button>
      <CustomGrid
        rows={todos}
        columns={[
          { field: "id", headerName: "Todo Id", width: 200 },
          { field: "title", headerName: "Title", flex:1 },
          { field: "completed", headerName: "Completed", width: 200 },
          { field: "userId", headerName: "UserId", width: 200 },
        ]}
      />
    </div>
  );
}
