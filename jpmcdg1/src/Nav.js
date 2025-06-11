import { Routes, Route, Link } from "react-router-dom";

import Todos from "./Todos";
import Comments from "./Comments";
import DynamicTable from "./DynamicTable";
const Nav = () => {
  return (
    <div>
      <Link to={"/"}>Todos</Link>
      <br />
      <Link to={"/comments"}>Comments</Link>
      <br />
      <Link to={"/dynamic"}>DynamicTable</Link>
      <br />
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/dynamic" element={<DynamicTable />} />
      </Routes>
    </div>
  );
};

export default Nav;
