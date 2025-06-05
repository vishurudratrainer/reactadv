import { Routes, Route, Link } from "react-router-dom";
import Counter from "./Counter";
import Todos from "./Todos";
import Comments from "./Comments";

export default function Nav() {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/todos"}>Todos</Link>
      <br />
      <Link to={"/comments"}>Comments</Link>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </div>
  );
}
