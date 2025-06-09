import { Routes, Route, Link } from "react-router-dom";
import PostCreate from "./PostCreate";
import TodosAxios from "./TodosAxios";
import TodosFetch from "./TodosFetch";
import TodosRestInstance from "./TodosRestInstance";
import Transfer from "./Transfer";
import Login from "./Login";
import { useState } from "react";
const Nav = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div>
      {authenticated && (
        <div>
          <Link to={"/"}>Home Page</Link>
          <br />
          <Link to={"/todosaxios"}>Todos Axios</Link>
          <br />
          <Link to={"/todosfetch"}>Todos Fetch</Link>
          <br />
          <Link to={"/todosret"}>Todos Rest</Link>
          <br />
          <Link to={"/transfer"}>Transfer</Link>
          <br />
        </div>
      )}
      <Routes>
        <Route
          path="/"
          element={<Login setAuthenticated={setAuthenticated} />}
        />
        <Route path="/todosaxios" element={<TodosAxios authenticated={authenticated} />} />
        <Route path="/todosfetch" element={<TodosFetch authenticated={authenticated} />} />
        <Route path="/todosret" element={<TodosRestInstance authenticated={authenticated} />} />
        <Route path="/transfer" element={<Transfer authenticated={authenticated} />} />
        <Route path="/postcreate" element={<PostCreate authenticated={authenticated} />} />

      </Routes>
    </div>
  );
};
export default Nav;
