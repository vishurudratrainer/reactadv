import { useState } from "react";

import RestInstance from "../rest/RestInstance";
const CommentsRestInstance = () => {
  const [comments, setComments] = useState([]);
  //      data, setter------------initialData
  const handleFetchComments = () =>
    RestInstance.get("comments/").then((response) =>
      setComments(response.data)
    );

  return (
    <div>
      <button onClick={handleFetchComments}>
        Fetch Comments using Rest Instance
      </button>
      <h1>{JSON.stringify(comments)}</h1>
    </div>
  );
};
export default CommentsRestInstance;
