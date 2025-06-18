import { useState } from "react";
import TodosTable from "./TodosTable";

const TodosById = () => {
  const [res, setRes] = useState([]);

  const capture = (e) => {
    let idToFetch = e.target.value;

    fetch("https://jsonplaceholder.typicode.com/todos/" + idToFetch)
      .then((res) => res.json())
      .then((res) => setRes([res]));
  };

  return (
    <div>
      <label>
        Enter Todo id to fetch <input onChange={capture} />
        <h1>{JSON.stringify(res)}</h1>
        <TodosTable todos={res}/>
      </label>
    </div>
  );
};

export default TodosById;
