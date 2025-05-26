import { useState } from "react";
import ModifiedTable1 from "./ModifiedTable1";
import NotLoggedIn from "./NotLoggedIn";
import { useContext } from "react";
import LoggedInContext from "./LoggedInContext";
export default function Comments(props) {
  const [comments, setComments] = useState([]);
  const loggedInContext = useContext(LoggedInContext);
  const { loggedIn } = loggedInContext;
  const fetchComments = () =>
    fetch("https://jsonplaceholder.typicode.com/comments/")
      .then((data) => data.json())
      .then((data) => setComments(data));

  return (
    <div>
      <NotLoggedIn loggedIn={loggedIn}/>
      {loggedIn && (<div>
      <button onClick={fetchComments}>Fetch Comments</button>
      <ModifiedTable1
        tableData={comments}
        properties={["id", "postId", "name", "email", "body"]}
      /></div>)}
    </div>
  );
}
