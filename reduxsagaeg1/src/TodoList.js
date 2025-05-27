import { useDispatch, useSelector } from "react-redux";

export default function TodoList() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todos.todos);

  const fetchTodo = () => dispatch({ type: "FETCH_TODO" });
  return (
    <div>
      <button onClick={fetchTodo}>Fetch Todos</button>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
}
