import "./App.css";
import Dogs from "./Dogs";
import TodoList from "./TodoList";
import TodosId from "./TodosId";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodosId />
        <TodoList />
        <Dogs />
      </header>
    </div>
  );
}

export default App;
