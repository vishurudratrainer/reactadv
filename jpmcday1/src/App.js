import './App.css';
import TodosFetch from './TodosFetch';
import TodosAxios from "./TodosAxios"
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <TodosFetch/>
       <TodosAxios/>
      </header>
    </div>
  );
}

export default App;
