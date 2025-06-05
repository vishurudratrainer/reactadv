import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TodosInput() {
  const [todoId, setTodoId] = useState(0);
  const navigate = useNavigate()
  const captureTodoId=e=>setTodoId(e.target.value)
  const handleClick =()=>navigate("/todosbyid/"+todoId)

  return (
    <div>
      <label>
        Enter todo id <input onChange={captureTodoId} />
      </label>
      <button onClick={handleClick}>Show data</button>
    </div>
  );
}
