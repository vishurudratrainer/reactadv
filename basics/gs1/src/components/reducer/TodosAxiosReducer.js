import axios from "axios";
import { useEffect } from "react";
import { useReducer } from "react";

const TodosReducer = (
  state = { todos: [], fetch: false, todoId: 0 },
  action
) => {
  if (action) {
    switch (action.type) {
      case "FETCHED_TODO":
        return { ...state, todos: action.data, fetch: false };
      case "FETCH_TODO":
        return { ...state, fetch: true };
      case "CAPTURE_TODOID":
        return { ...state, todoId: action.todoId };
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
    if (data?.fetch) {
      let url = "https://jsonplaceholder.typicode.com/todos/";
      if (data?.todoId !== 0) {
        url = url + data.todoId;
      }
      axios
        .get(url)
        .then((data) => dispatch({ type: "FETCHED_TODO", data: data.data }));
    }
  }, [data?.fetch]);
  const fetchTodos = () => {
    dispatch({ type: "FETCH_TODO" });
  };
  const captureTodo = (e) =>
    dispatch({ type: "CAPTURE_TODOID", todoId: e.target.value });

  return (
    <div>
      <label>
        Enter todoId <input id="todoId" onChange={captureTodo} />
      </label>
      <button onClick={fetchTodos} id="fetchtodo">
        Fetch TODO
      </button>
      <h1 id="output">{JSON.stringify(data)}</h1>
    </div>
  );
};

export default TodosAxiosReducer;
