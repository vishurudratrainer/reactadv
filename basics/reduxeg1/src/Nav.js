import { Route, Routes, Link } from "react-router-dom";
import Counter from "./Counter";
import Todos from "./Todos";
import TodoById from "./TodoById";
export default function Nav() {
  return (
    <div>
      <Link to="/">HOME</Link>
      <br />
      <Link to="/todos">TODOS</Link>
      <br />
      <Link to="/todosbyid">TODOS BY ID</Link>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/todosbyid" element={<TodoById />} />
      </Routes>
    </div>
  );
}
