import "./App.css";
import Comments from "./Comments";
import Login from "./Login";
import PostForm from "./PostForm";
import Todos from "./Todos";

function App() {
  return (
    <div className="App">
      <Login/>
      <Comments/>
      <Todos />
      <PostForm />
    </div>
  );
}

export default App;
