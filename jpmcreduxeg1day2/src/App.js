import "./App.css";
import Counter from "./components/Counter";
import TodoId from "./components/TodoId";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoId/>
        <Todos/>
        <Counter />
      </header>
    </div>
  );
}

export default App;
