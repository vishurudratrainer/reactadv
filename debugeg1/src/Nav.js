import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Todo from "./Todos";
import Todo1 from "./Todos1";
import Comments from "./Comments";
import PageAbsent from "./PageAbsent";
import Login from "./Login";

export default function Nav(props) {
  return (
    <BrowserRouter>
      {props.loggedIn && (
        <div>
          <Link to={"/todos"}>Todos</Link>
          <br />
          <Link to={"/todos1"}>Todos1</Link>
          <br />
          <Link to={"/comments"}>Comments</Link>
          <br />
          <Link to={"/hello"}>Test Absent</Link>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="todos" element={<Todo />}></Route>
        <Route path="todos1" element={<Todo1 />}></Route>
        <Route path="comments" element={<Comments />}></Route>
        <Route path="*" element={<PageAbsent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
