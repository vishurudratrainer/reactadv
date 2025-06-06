import { useSelector, useDispatch } from "react-redux";
import { CAPTURE_TODOS_ID, FETCH_TODOS_ID } from "../ActionType";

export default function TodosInput() {
  const dispatch = useDispatch();
  const todosData = useSelector((state) => state.todos);
  const dispatchTodo = () => {
    dispatch({ type: FETCH_TODOS_ID, todoId: todosData.todoId });
  };

  const captureTodoId = (e) =>
    dispatch({ type: CAPTURE_TODOS_ID, todoId: e.target.value });
  return (
    <div>
      <label>
        Enter TodoId to fetch <input onChange={captureTodoId} />
      </label>
      <button onClick={dispatchTodo}> Fetch Todos</button>
      <h1>{JSON.stringify(todosData)}</h1>
    </div>
  );
}
