import { Routes, Route, Link } from "react-router-dom";
import Todos from "./components/Todos";

export default function Nav() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Todos/>}>Todos</Route>
      </Routes>
      <Link to={"/"}>Todos</Link>
    </div>
  );
}
