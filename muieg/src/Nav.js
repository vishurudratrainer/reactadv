import { Route, Routes, Link } from "react-router-dom";
import Counter from "./Counter";
import Todos from "./Todos";
import TodosById from "./TodosById";

export default function Nav() {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"todos"}>Todos</Link>
      <br />
      <Link to={"todosbyid"}>TodosById</Link>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="todos" element={<Todos />} />
        <Route path="todosbyid" element={<TodosById />} />
      </Routes>
    </div>
  );
}
