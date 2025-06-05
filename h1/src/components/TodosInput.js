import { useState } from "react";
import { useNavigate } from "react-router-dom";
import withHover from "./withHover";
 function TodosInput({isHovered}) {
  const [todoId, setTodoId] = useState(0);
  const navigate = useNavigate()
  const captureTodoId=e=>setTodoId(e.target.value)
  const handleClick =()=>navigate("/todosbyid/"+todoId)

  return (
    <div>
      <label>
        Enter todo id <input  style={{ backgroundColor: isHovered ? "blue" : "white" }} onChange={captureTodoId} />
      </label>
      <button onClick={handleClick}>Show data</button>
    </div>
  );
}
export default withHover(TodosInput)