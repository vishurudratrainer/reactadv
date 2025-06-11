import "./App.css";
import Comments from "./Comments";
import PostForm from "./PostForm";
import Todos from "./Todos";

function App() {
  return (
    <div className="App">
      <Comments/>
      <Todos />
      <PostForm />
    </div>
  );
}

export default App;
