import { Routes, Route, Link } from "react-router-dom";
import Counter from "./Counter";
import Todos from "./Todos";
import Comments from "./Comments";
import Login from "./Login";
import PrivateRoutes from "./PrivateRoute";

export default function Nav(props) {
  return (
    <div>
      {props.token && (
        <div>
          <Link to={"/"}>Home</Link>
          <br />
          <Link to={"/todos"}>Todos</Link>
          <br />
          <Link to={"/comments"}>Comments</Link>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Login setToken={props.setToken} />} />
        <Route element={<PrivateRoutes token={props.token} />}>
          <Route path="/counter" element={<Counter />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/comments" element={<Comments />} />
        </Route>
      </Routes>
    </div>
  );
}
