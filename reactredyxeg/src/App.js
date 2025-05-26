import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { FETCH_TODO } from "./ActionTypes";
function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const todos = useSelector((state) => state.todos.todos);

  const fetchTodo = () => dispatch({ type: FETCH_TODO });
  const increment = () => {
    dispatch({ type: "INC" });
  };
  return (
    <div className="App">
      <header className="App-header">
        <Todo/>
        <h1>Counter: {count.count}</h1>
        <button onClick={increment}>Inc</button>
        <button onClick={fetchTodo}>FETCH_TODO</button>
        <h1>{JSON.stringify(todos)}</h1>
      </header>
    </div>
  );
}

export default App;
