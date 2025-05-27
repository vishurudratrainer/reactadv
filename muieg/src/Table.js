import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "userId",
    headerName: "USERID",
  },
  {
    field: "title",
    headerName: "TITLE",
    flex: 1,
  },
  {
    field: "completed",
    headerName: "COMPLETED",
  },
];

export default function Table(props) {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={props.rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
