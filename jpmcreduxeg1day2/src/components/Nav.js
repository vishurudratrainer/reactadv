import { Link, Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import Todos from "./Todos";
import TodoId from "./TodoId";
import PostForm from "./PostForm";

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
        <Route path="/" element={<Counter />} />{" "}
        <Route path="/todos" element={<Todos />} />
        <Route path="/todosid" element={<TodoId />} />
        <Route path="/postform" element={<PostForm />} />
      </Routes>
    </div>
  );
};

export default Nav;
