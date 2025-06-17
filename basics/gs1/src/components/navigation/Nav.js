import { Routes, Route, Link } from "react-router-dom";
import Counter from "../../Counter";
import Presentation from "../slideshow/Presentation";
import StudentForm from "../students/StudentForm";
import Calculator from "../../Calculator";
import Login from "../login/Login";
import { useState } from "react";
import Guard from "../login/Guard";
import Todos from "../rest/Todos";
import PostCreate from "../rest/PostCreate";
export default function Nav() {
  const [isUserAuth, setIsUserAuth] = useState(false);
  return (
    <div>
      {isUserAuth && (
        <div>
          <Link to="/">Home</Link>
          <br />
          <Link to="/slide">Slide</Link>
          <br />
          <Link to="/student">Student</Link>
          <br />
          <Link to="/calculator">Calculator</Link>
          <br />
          <Link to="/todos">Todos</Link>
          <br />
          <Link to="/post">Posts</Link>
          <br />
        </div>
      )}
      <Routes>
        <Route
          path="/"
          element={<Login setIsUserAuth={setIsUserAuth} />}
        ></Route>
        <Route element={<Guard authenticated={isUserAuth} />}>
          <Route path="/counter" element={<Counter />} />
          <Route path="/slide" element={<Presentation />} />
          <Route path="/student" element={<StudentForm />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/todos" element={<Todos />}></Route>
          <Route path="/post" element={<PostCreate />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
