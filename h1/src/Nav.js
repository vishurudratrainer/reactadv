import { Routes, Route, Link } from "react-router-dom";
import Counter from "./components/Counter";
import Todos from "./components/Todos";
import Comments from "./components/Comments";
import Login from "./components/Login";
import PrivateRoutes from "./components/PrivateRoute";
import TodosSingle from "./components/TodosSingle";
import TodosInput from "./components/TodosInput";
import PostForm from "./components/PostForm";
import InputComponent from "./components/InputComponent";
import PrivateComponent from "./components/PrivateComponent";
import LoginComponent from "./components/LoginComponent";
import PostComponent from "./components/PostComponent";
import TodosFetch1 from "./components/TodosFetch1";

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
          <br />
          <Link to={"/todosbyid/23"}>Todos By Id</Link>
          <br />
          <Link to={"/todosInput"}>Todos Input</Link>
          <br />
          <Link to={"/postform"}>Post Form</Link>
          <br />
          <Link to={"/hoc1"}>HOC Hover1</Link>
          <br />
          <Link to={"/hoc2"}>HOC Hover2</Link>
          <br />
          <Link to={"/hoc3"}>HOC Hover3</Link>
          <br />
          <Link to={"/hoc4"}>HOC Hover4</Link>
          <br />
          <Link to={"/hoc5"}>HOC Hover5</Link>
          <br />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/counter" element={<Counter />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/todosbyid/:id" element={<TodosSingle />} />
          <Route path="/todosInput" element={<TodosInput />} />
          <Route path="/postform" element={<PostForm />} />
          <Route path="/hoc1" element={<InputComponent />} />
          <Route path="/hoc2" element={<PrivateComponent userRole="user" />} />
          <Route path="/hoc3" element={<LoginComponent />} />
          <Route path="/hoc4" element={<PostComponent />} />
          <Route path="/hoc5" element={<TodosFetch1 />} />
        </Route>
      </Routes>
    </div>
  );
}
