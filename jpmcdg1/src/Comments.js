import { useState } from "react";
import CustomGrid from "./CustomGrid";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const columns = [
    { field: "id" },
    { field: "postId" },
    { field: "name" },
    { field: "email" },
    { field: "body" },
  ];
  const handleComments = () =>
    fetch("https://jsonplaceholder.typicode.com/comments/")
      .then((res) => res.json())
      .then((data) => setComments(data));

  return (
    <div>
      <button onClick={handleComments}>Fetch comments</button>
      <CustomGrid data={comments} columns={columns} />
    </div>
  );
};
export default Comments;
