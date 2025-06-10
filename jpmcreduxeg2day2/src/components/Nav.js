import { Link, Routes, Route } from "react-router-dom";

import Todos from "./Todos";
import TodoId from "./TodoId";
import PostForm from "./PostForm";
import Dog from "./Dog";
import Login from "./Login";

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
      <Link to={"/dog"}>Dog form </Link>
      <br />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todosid" element={<TodoId />} />
        <Route path="/postform" element={<PostForm />} />
        <Route path="/dog" element={<Dog />} />
      </Routes>
    </div>
  );
};

export default Nav;
