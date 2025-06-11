import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component


const CustomGrid = ({columns,data})=>{
    return(  <div style={{ height: 500 }}>
        <AgGridReact
            rowData={data}
            columnDefs={columns}
        />
    </div>)
}

export default CustomGrid