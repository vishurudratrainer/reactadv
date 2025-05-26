import { useDispatch,useSelector } from "react-redux";
import {CAPTURE_TODO_ID,FETCH_TODO_ID} from "./ActionTypes"
export default function Todo(){
  const dispatch = useDispatch()
  const data = useSelector(state=>state)
  const captureTodoId = e =>{
        let todoId = e.target.value
        dispatch({type:CAPTURE_TODO_ID,todoId:todoId})
  }
  const fetchSingleTodoID = ()=>{
        dispatch({type:FETCH_TODO_ID,todoId:data.todos.todoId})
  }

  return (<div>
    <label>Enter Todo id to fetch <input onChange={captureTodoId} /></label>
    <button onClick={fetchSingleTodoID}> Fetch Todo for single value</button><br/>
    <h1>{JSON.stringify(data.todos)}</h1>

  </div>)

}
