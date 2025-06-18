import { Route, Routes, Link } from "react-router-dom";
import Counter from "./Counter";
import Todos from "./Todos";
export default function Nav() {
  return (
    <div>
      <Link to="/">HOME</Link>
      <br />
      <Link to="/todos">TODOS</Link>

      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  );
}
