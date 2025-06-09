import './App.css';
import TodosFetch from './components/TodosFetch';
import TodosAxios from "./components/TodosAxios"
import TodosRestInstance from './components/TodosRestInstance';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodosRestInstance/>
       <TodosFetch/>
       <TodosAxios/>
      </header>
    </div>
  );
}

export default App;
