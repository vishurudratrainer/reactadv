import { Routes, Route, Link } from "react-router-dom";
import Counter from "./components/Counter";
import Todos from "./components/Todos";
import Comments from "./components/Comments";
import Login from "./components/Login";
import PrivateRoutes from "./components/PrivateRoute";
import TodosSingle from "./components/TodosSingle";

export default function Nav(props) {
  return (
    <div>
      {props.token && (
        <div>
          <Link to={"/"}>Home</Link>
          <br />
          <Link to={"/todos"}>Todos</Link>
          <br />
          <Link to={"/comments"}>Comments</Link><br/>
          <Link to={"/todosbyid/23"}>Todos By Id</Link>
          <br />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Login  />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/counter" element={<Counter />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/todosbyid/:id" element={<TodosSingle />} />

        </Route>
      </Routes>
    </div>
  );
}
