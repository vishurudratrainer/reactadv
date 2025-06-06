import { useSelector, useDispatch } from "react-redux";
import { FETCH_TODOS } from "../ActionType";

export default function Todos() {
  const dispatch = useDispatch();
  const todosData = useSelector((state) => state.todos.todosData);
  const dispatchTodo = () => {
    dispatch({ type: FETCH_TODOS });
  };
  return (
    <div>
      <button onClick={dispatchTodo}> Fetch Todos</button>
      <h1>{JSON.stringify(todosData)}</h1>
    </div>
  );
}
