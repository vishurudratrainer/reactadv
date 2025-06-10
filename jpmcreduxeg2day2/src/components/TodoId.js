import { useSelector, useDispatch } from "react-redux";
import { CAPTURE_ID, FETCH_TODO_ID } from "../ActionType";
const TodoId = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todos);
  const send = () => dispatch({ type: FETCH_TODO_ID ,todoId:data.todoId});
  const captureId = (e) => {
    dispatch({ type: CAPTURE_ID, todoId: e.target.value });
  };

  return (
    <div>
      <label>
        Enter Todo Id <input onChange={captureId} />
      </label>
      <button onClick={send}>FETCH_TODO</button>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
};

export default TodoId;
