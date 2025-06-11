import { useState } from "react";
import CustomGrid from "./CustomGrid";

const DynamicTable = () => {
  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);
  const getHeader = (data) => {
    let header = [];
    if (data.length !== 0) {
      let firstRow = data[0];
      for (let propertyName in firstRow) {
        header.push({ field: propertyName });
      }
    }
    return header;
  };

  const captureChange = (e) => {
    let v = e.target.value;
    fetch("https://jsonplaceholder.typicode.com/" + v)
      .then((res) => res.json())
      .then((data) => {
        setColumns(getHeader(data));
        setTableData(data);
      });
  };

  return (
    <div>
      <label>Select a data</label>
      <select onChange={captureChange}>
        <option>Select</option>
        <option value={"todos"}>Todos</option>
        <option value={"comments"}>Comments</option>
        <option value={"posts"}>Posts</option>
      </select>
      <CustomGrid data={tableData} columns={columns}/>
    </div>
  );
};
export default DynamicTable