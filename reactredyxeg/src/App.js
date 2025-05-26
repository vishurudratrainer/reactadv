import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const increment = () => {
    dispatch({ type: "INC" });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {count.count}</h1>
        <button onClick={increment}>Inc</button>
      </header>
    </div>
  );
}

export default App;
