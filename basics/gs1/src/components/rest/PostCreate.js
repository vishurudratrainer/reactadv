import { useState } from "react";

const PostCreate = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    userId: "'",
  });

  const [res,setRes] = useState([])

  const add = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setRes(json));
  };

   const capture = (e) => {
    let propertyName = e.target.name;
    let propertyValue = e.target.value;
    setFormData({ ...formData, [propertyName]: propertyValue });
  };

  return (
    <div>
      <form onSubmit={add}>
        <label>
          Enter title <input name="title" onChange={capture}/>
        </label>
        <br />
        <label>
          Enter userId <input name="userId" onChange={capture} />
        </label>
        <br />
        <label>
          Enter body <input name="body" onChange={capture} />
        </label>
        <button type="submit">Add</button>
      </form>
      <h1>{JSON.stringify(res)}</h1>
    </div>
  );
};

export default PostCreate
