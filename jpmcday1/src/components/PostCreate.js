import { useState } from "react";
import RestInstance from "../rest/RestInstance";
const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");
  const [body, setBody] = useState("");
  const [result, setResult] = useState("");
  const captureTitle = (e) => setTitle(e.target.value);
  const captureBody = (e) => setBody(e.target.value);
  const captureUserId = (e) => setUserId(e.target.value);
  const handleForm = (e) => {
    e.preventDefault();
    RestInstance.post("posts/", {
      body: JSON.stringify({ title, body, userId }),
    }).then((res) => setResult(res.data));
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <label>
          Enter Title <input onChange={captureTitle} />
        </label>
        <br />
        <label>
          Enter UserId <input onChange={captureUserId} />
        </label>
        <br />
        <label>
          Enter Body <input onChange={captureBody} />
        </label>
        <br />
        <button type="submit">Add Post</button>
      </form>
      <h1>{JSON.stringify(result)}</h1>
    </div>
  );
};


export default PostCreate;