import { useDispatch,useSelector } from "react-redux";
import { CAPTURE_TODO_ID } from "../actions/ActionType";


export default function TodoInput(){
    const dispatch = useDispatch()
    const data = useSelector(state=>state.todos.todosData)
    const dispatchTodoId =e =>dispatch({type:CAPTURE_TODO_ID,todoId:e.target.value})

    return(<div>
        <label>Enter todo Id <input onChange={dispatchTodoId}/></label>
        <h1>{JSON.stringify(data)}</h1>
    </div>)

}
