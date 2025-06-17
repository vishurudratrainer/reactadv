import { DataGrid } from "@mui/x-data-grid";

const TodosTable = ({ todos }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "userId", headerName: "USERID", width: 300 },
    { field: "title", headerName: "TITLE", flex: 1 },
    { field: "completed", headerName: "COMPLETED", width: 300 },
  ];
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={todos} columns={columns} />
    </div>
  );
};

export default TodosTable;
