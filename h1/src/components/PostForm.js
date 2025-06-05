import { useState } from "react";
import RestApiInstance from "../resthelper/RestApiInstance";

export default function PostForm() {
  const [formData, setFormData] = useState({ title: "", body: "", userId: "" });
  const [res,setRes]=useState({})
  const captureInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const handlePost = (e) => {
    e.preventDefault();
    RestApiInstance.post("posts", JSON.stringify(formData), {
      headers: { "Content-Type": "application/json" },
    }).then(res=>setRes(res.data))
  };
  return (
    <div>
      <form onSubmit={handlePost}>
        <label>
          Enter title <input name="title" onChange={captureInput} />
        </label>
        <br />
        <label>
          Enter body <input name="body" onChange={captureInput} />
        </label>
        <br />
        <label>
          Enter userId <input name="userId" onChange={captureInput} />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
      <h1>{JSON.stringify(res)}</h1>
    </div>
  );
}
