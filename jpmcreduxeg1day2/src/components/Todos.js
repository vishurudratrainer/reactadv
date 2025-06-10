import { useSelector, useDispatch } from "react-redux";
import { FETCH_TODO } from "../ActionType";
const Todos = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todos.todos);
  const send = () => dispatch({ type: FETCH_TODO });

  return (
    <div>
      <button onClick={send}>FETCH_TODO</button>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
};

export default Todos
