import { useDispatch, useSelector } from "react-redux";
import { FETCH_TODOS } from "../actions/ActionType";

export default function Todos() {
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.todos.todosData);
  const dispatchFetchTodos = () => dispatch({ type: FETCH_TODOS });

  return (
    <div>
      <button onClick={dispatchFetchTodos}>FETCH_TODOS</button>
      <h1>{JSON.stringify(todoData)}</h1>
    </div>
  );
}
