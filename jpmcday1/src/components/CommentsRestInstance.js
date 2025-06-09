import { useState } from "react";
import StaticTable from "./DynamicTable";
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
      <StaticTable rows={comments} columns={["postId","id","name","email","body"]}/>
    </div>
  );
};
export default CommentsRestInstance;
