import { useState } from "react";
import { useErrorBoundary ,withErrorBoundary} from "react-error-boundary";
import Fallback from "./Fallback";
const Todos1 = () => {
  const [todos, setTodos] = useState([]);
  const { showBoundary } = useErrorBoundary();
  const fetchTodos = () => {
    try {
      fetch("https://jsonplaceholder1.typicode.com/todos/")
        .then((data) => data.json())
        .then((data) => setTodos(data))
        .catch((error) => showBoundary(error));
    } catch (error) {
      showBoundary(error);
    }
  };

  return (
    <div>
      <button onClick={fetchTodos}>Fetch Todos</button>
      <p>{JSON.stringify(todos)}</p>
    </div>
  );
};
const logError =(error,componentStack)=>{
  console.error("Error",error)
  console.log("compE",componentStack)
}
export default withErrorBoundary(Todos1,{onError:logError,FallbackComponent:Fallback});
