import { Routes, Route, Link } from "react-router-dom";
import Todos from "./components/Todos";
import TodosInput from "./components/TodosInput";
import Dog from "./components/Dog";

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
        <Route path="/dog" element={<Dog />}>
          Todos
        </Route>
      </Routes>
      <Link to={"/"}>Todos</Link>
      <br />
      <Link to={"/todoid"}>Todos By Id</Link>
      <br />
      <Link to={"/dog"}>Dogs</Link>
    </div>
  );
}
