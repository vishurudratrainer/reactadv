
import { useDispatch, useSelector } from "react-redux";

export default function TodosId(){
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todos);
  const captureTodoId = e => dispatch({type:"CAPTURE_TODO_ID",todoId:e.target.value})
  const fetchTodoById =()=>{
    dispatch({type:"FETCH_TODO_BY_ID",todoId:data.todoId})
  }
  return(<div>
    <label>Enter Todo Id <input onChange={captureTodoId}/></label>
    <button onClick={fetchTodoById}>Fetch by Id</button>
    <h1>{JSON.stringify(data)}</h1>
  </div>)
}