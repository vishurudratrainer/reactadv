import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import GridThemeContext from "./GridThemeContext";
import { useContext } from "react";
const CustomGrid = ({ columns, data }) => {
    const gridThemeContext = useContext(GridThemeContext)
  return (
    <div style={{ height: 500 }}>
      <AgGridReact
        rowData={data}
        columnDefs={columns}
        pagination={true}
        defaultColDef={{ filter: true }}
        theme={gridThemeContext.gridTheme}
      />
    </div>
  );
};

export default CustomGrid;
