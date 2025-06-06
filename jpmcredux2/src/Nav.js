import { Routes, Route, Link } from "react-router-dom";
import Todos from "./components/Todos";
import TodosInput from "./components/TodosInput";

export default function Nav() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Todos />}>
          Todos
        </Route>
        <Route path="/todoid" element={<TodosInput />}>
          Todos
        </Route>
      </Routes>
      <Link to={"/"}>Todos</Link>
      <br />
      <Link to={"/todoid"}>Todos By Id</Link>
    </div>
  );
}
