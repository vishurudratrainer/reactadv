import { Routes, Route, Link } from "react-router-dom";
import PostCreate from "./PostCreate";
import TodosAxios from "./TodosAxios";
import TodosFetch from "./TodosFetch";
import TodosRestInstance from "./TodosRestInstance";

const Nav = () => {
  return (
    <div>
      <Link to={"/"}>Home Page</Link>
      <br />
      <Link to={"/todosaxios"}>Todos Axios</Link>
      <br />
      <Link to={"/todosfetch"}>Todos Fetch</Link>
      <br />
      <Link to={"/todosret"}>Todos Rest</Link>
      <br />
      <Routes>
        <Route path="/" element={<PostCreate />} />
        <Route path="/todosaxios" element={<TodosAxios />} />
        <Route path="/todosfetch" element={<TodosFetch />} />
        <Route path="/todosret" element={<TodosRestInstance />} />
      </Routes>
    </div>
  );
};
export default Nav;
