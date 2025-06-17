import { Routes, Route, Link } from "react-router-dom";
import Counter from "../../Counter";
import Presentation from "../slideshow/Presentation";
import StudentForm from "../students/StudentForm";
import Calculator from "../../Calculator";
import Login from "../login/Login";

export default function Nav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/slide">Slide</Link>
      <br />
      <Link to="/student">Student</Link>
      <br />
      <Link to="/calculator">Calculator</Link>
      <br />
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/counter" element={<Counter />} />
        <Route path="/slide" element={<Presentation />} />
        <Route path="/student" element={<StudentForm />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}
