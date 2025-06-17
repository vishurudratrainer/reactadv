import { useEffect, useState } from "react";

const TodosEffect = () => {
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState("");

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/todos/";
    if (todoId !== "") {
      url = url + todoId;
    }
    fetch(url)
      .then((res) => res.json())
      .then((res) => setTodos(res));
  }, [todoId]);//this will get called once at the start and will also get called when todoId is changed

  const capture = (e) => setTodoId(e.target.value);

  return (
    <div>
      <label>
        Enter todoId <input onChange={capture} />
      </label>
      <br />
      <h1>{JSON.stringify(todos)}</h1>
    </div>
  );
};

export default TodosEffect;
