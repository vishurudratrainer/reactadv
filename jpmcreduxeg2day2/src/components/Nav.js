import { Link, Routes, Route } from "react-router-dom";

import Todos from "./Todos";

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
      </Routes>
    </div>
  );
};

export default Nav;
