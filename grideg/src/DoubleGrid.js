import { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component

export default function DoubleGrid() {
  const [posts, setPosts] = useState([]);
   const [comments, setComments] = useState([]);


  const defaultColDef = useMemo(() => ({
    filter: true, // Enable filtering on all columns
  }));
  const [postColDefs] = useState([
    { field: "id", filter: true },
    { field: "userId" },
    { field: "title" },
    { field: "body" },
  ]);

    const [commentsColDefs] = useState([
    { field: "id", filter: true },
    { field: "postId" },
    { field: "name" },
    { field: "email" },
  ]);

  const fetchCommentDataById = (event) =>{
    console.log(event.value)
       fetch("https://jsonplaceholder.typicode.com/comments/ ")
      .then((data) => data.json())
      .then((data) => {
           setComments(data.filter(row=>row.postId==event.value))
      });
  }
  const fetchPosts = () =>
    fetch("https://jsonplaceholder.typicode.com/posts/ ")
      .then((data) => data.json())
      .then((data) => setPosts(data));

  return (
    <div>
      <button onClick={fetchPosts}>Fetch</button>
      <div style={{ height: 300 }}>
        <AgGridReact
          rowData={posts}
          columnDefs={postColDefs}
          defaultColDef={defaultColDef}
          pagination={true} // Enable Pagination
        onCellClicked={event =>fetchCommentDataById(event)}

        />
      </div>
       <div style={{ height: 300 }}>
        <AgGridReact
          rowData={comments}
          columnDefs={commentsColDefs}
          defaultColDef={defaultColDef}
          pagination={true} // Enable Pagination
        />
      </div>
    </div>
  );
}
