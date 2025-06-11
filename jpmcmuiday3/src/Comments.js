import Button from "@mui/material/Button";
import { useState } from "react";
import CustomGrid from "./CustomGrid";
import CircularProgress from "@mui/material/CircularProgress";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchComments = () => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((data) => {
          setComments(data);
          setLoading(false);
        });
    }, 5000);
  };
  return (
    <div>
      {loading && <CircularProgress />}

      <Button variant="contained" onClick={fetchComments}>
        Fetch Comments
      </Button>
      <CustomGrid
        rows={comments}
        columns={[
          { field: "id", headerName: "Todo Id", width: 200 },
          { field: "postId", headerName: "Post Id", flex: 1 },
          { field: "name", headerName: "Name", width: 200 },
          { field: "email", headerName: "Email", width: 200 },
          { field: "body", headerName: "Body", width: 200 },
        ]}
      />
    </div>
  );
}
