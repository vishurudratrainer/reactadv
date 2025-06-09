import './App.css';
import TodosFetch from './components/TodosFetch';
import TodosAxios from "./components/TodosAxios"
import TodosRestInstance from './components/TodosRestInstance';
import CommentsRestInstance from './components/CommentsRestInstance';
import PostCreate from './components/PostCreate';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PostCreate/>
        <CommentsRestInstance/>
        <TodosRestInstance/>
       <TodosFetch/>
       <TodosAxios/>
      </header>
    </div>
  );
}

export default App;
