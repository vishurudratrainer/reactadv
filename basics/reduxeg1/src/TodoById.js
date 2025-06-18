import { useDispatch, useSelector } from "react-redux";
import { FETCH_TODO_BY_ID } from "./ActionType";

export default function TodoById() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const captureTodoId = e => dispatch({type:FETCH_TODO_BY_ID,todoId:e.target.value})

  return (
    <div>
      <label>
        Enter todoId <input onChange={captureTodoId} />
      </label>
      <h1>{JSON.stringify(data.todos.todos)}</h1>
    </div>
  );
}
