import {useDispatch,useSelector} from "react-redux"
import { FETCH_TODO } from "./ActionType";
const Todos = () => {
    const dispatch = useDispatch()
    const data = useSelector(state=>state)
    const fetchTodo =()=>dispatch({type:FETCH_TODO})

  return (
    <div>
      <button onClick={fetchTodo}>FETCH_TODO</button>
      <h1>{JSON.stringify(data.todos.todos)}</h1>
    </div>
  );
};

export default Todos;
