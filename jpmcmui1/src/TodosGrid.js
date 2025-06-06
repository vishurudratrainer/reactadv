import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
export default function TodosGrid() {
  const [todos, setTodos] = useState([]);
  const fetchTodos = () =>
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((data) => data.json())
      .then((data) => setTodos(data));

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "userId", headerName: "USERID", width: 90 },
    { field: "title", headerName: "TITLE", flex: 1 },
    { field: "completed", headerName: "COMPLETED", width: 90 },
  ];

  return (
    <div>
      <Button variant="contained" onClick={fetchTodos}>
        FETCH TODOS
      </Button>

      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={todos}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
        />
      </Box>
    </div>
  );
}
