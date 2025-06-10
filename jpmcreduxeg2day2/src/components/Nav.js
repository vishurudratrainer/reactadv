import { Link, Routes, Route } from "react-router-dom";

import Todos from "./Todos";
import TodoId from "./TodoId";

const Nav = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/todos"}>Todos</Link>
      <br />
      <Link to={"/todosid"}>Todos By ID</Link>
      <br />
      <Link to={"/postform"}>Post form </Link>
      <br />
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/todosid" element={<TodoId />} />
      </Routes>
    </div>
  );
};

export default Nav;
