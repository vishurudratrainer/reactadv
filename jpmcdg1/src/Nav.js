import { Routes, Route, Link } from "react-router-dom";

import Todos from "./Todos";
import Comments from "./Comments";
const Nav = () => {
  return (
    <div>
      <Link to={"/"}>Todos</Link>
      <br />
      <Link to={"/comments"}>Comments</Link>
      <br />
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </div>
  );
};

export default Nav;
