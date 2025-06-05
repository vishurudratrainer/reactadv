import { useState } from "react";
import DynamicTable from "./DynamicTable";
import axios from "axios";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [columns, setColumns] = useState([]);
  const getColumns = (data) => {
    let header = [];
    for (let property in data) {
      header.push(property);
    }
    return header;
  };

  const fetchComments = () =>
    fetch("https://jsonplaceholder.typicode.com/comments/")
      .then((res) => res.json())
      .then((res) => {
        setColumns(getColumns(res[0]));
        setComments(res);
      });
  return (
    <div>
      <h1>Comments fetch example</h1>
      <button onClick={fetchComments}>Fetch Comments</button>
      <DynamicTable data={comments} columns={columns} />
    </div>
  );
}
