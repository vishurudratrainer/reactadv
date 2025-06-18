import axios from "axios";
import { useEffect } from "react";
import { useReducer } from "react";

const TodosReducer = (state = { todos: [], fetch: false }, action) => {
  if (action) {
    switch (action.type) {
      case "FETCHED_TODO":
        return { ...state, todos: action.data, fetch: false };
      case "FETCH_TODO":
        return { ...state, fetch: true };
      default:
        return state;
    }
  }
  return state;
};

const TodosAxiosReducer = () => {
  const [data, dispatch] = useReducer(TodosReducer);

  useEffect(() => {
    console.log(data?.fetch);
    if (data?.fetch)
      axios
        .get("https://jsonplaceholder.typicode.com/todos/")
        .then((data) => dispatch({ type: "FETCHED_TODO", data: data.data }));
  }, [data?.fetch]);
  const fetchTodos = () => {
    dispatch({ type: "FETCH_TODO" });
  };

  return (
    <div>
      <button onClick={fetchTodos}>Fetch TODO</button>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
};

export default TodosAxiosReducer;
