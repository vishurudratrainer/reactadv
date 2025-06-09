import './App.css';
import TodosFetch from './components/TodosFetch';
import TodosAxios from "./components/TodosAxios"
import TodosRestInstance from './components/TodosRestInstance';
import CommentsRestInstance from './components/CommentsRestInstance';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CommentsRestInstance/>
        <TodosRestInstance/>
       <TodosFetch/>
       <TodosAxios/>
      </header>
    </div>
  );
}

export default App;
