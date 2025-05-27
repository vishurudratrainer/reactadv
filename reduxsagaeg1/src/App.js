import './App.css';
import Dogs from './Dogs';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList/>
       <Dogs/>
      </header>
    </div>
  );
}

export default App;
