import { Route, Routes, Link } from "react-router-dom";
import Counter from "./Counter";
import Todos from "./Todos";
import TodoById from "./TodoById";
import Comments from "./Comments";
import Dog from "./Dog";
export default function Nav() {
  return (
    <div>
      <Link to="/">HOME</Link>
      <br />
      <Link to="/todos">TODOS</Link>
      <br />
      <Link to="/todosbyid">TODOS BY ID</Link> <br />
      <Link to="/comments">COMMENTS</Link>
      <br />
      <Link to="/dog">DOG</Link>
      <br />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/todosbyid" element={<TodoById />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/dog" element={<Dog />} />
      </Routes>
    </div>
  );
}
