import "./App.css";
import Counter from "./components/Counter";
import TodoInput from "./components/TodoInput";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoInput/>
        <Todos />
        <Counter />
      </header>
    </div>
  );
}

export default App;
