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
import TodosById from "../rest/TodosById";
import TodosMui from "../rest/TodosMui";
import TodosEffect from "../rest/TodosEffect";
import Countries from "../rest/Countries";
import TodosAxios from "../rest/TodosAxios";
import UserContext from "../../context/UserContext";
import Themes from "../themes/Themes";
import InputComponent from "../hoc/InputComponent";
import ModifiedTextComponent from "../hoc/ModifiedTextComponent";
import BoldComponent from "../hoc/BoldComponent";
import TodosReducer from "../reducer/TodosReducer";
export default function Nav() {
  const [isUserAuth, setIsUserAuth] = useState(false);
  const [username, setUsername] = useState("");
  const [theme, setTheme] = useState("");

  return (
    <UserContext.Provider value={{ username: username, theme: theme }}>
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
            <Link to="/todosbyid">Todos By Id</Link>
            <br />
            <Link to="/todosmui">Todos MUI</Link>
            <br />
            <Link to="/todoseffect">Todos Effect</Link>
            <br />
            <Link to="/countries">Countries</Link>
            <br />
            <Link to="/todosaxios">Todos Axios</Link>
            <br />
            <Link to="/themes">Themes </Link>
            <br />
            <Link to="/hoc1">HOC1 </Link>
            <br />
            <Link to="/hoc2">HOC2</Link>
            <br />
            <Link to="/todosreducer">Todos Reducer</Link>
          </div>
        )}
        <Routes>
          <Route
            path="/"
            element={
              <Login setIsUserAuth={setIsUserAuth} setUsername={setUsername} />
            }
          ></Route>
          <Route element={<Guard authenticated={isUserAuth} />}>
            <Route path="/counter" element={<Counter />} />
            <Route path="/slide" element={<Presentation />} />
            <Route path="/student" element={<StudentForm />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/todos" element={<Todos />}></Route>
            <Route path="/post" element={<PostCreate />}></Route>
            <Route path="/todosbyid" element={<TodosById />}></Route>
            <Route path="/todosmui" element={<TodosMui />}></Route>
            <Route path="/todoseffect" element={<TodosEffect />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/todosaxios" element={<TodosAxios />} />
            <Route path="/themes" element={<Themes setTheme={setTheme} />} />
            <Route path="/hoc1" element={<InputComponent type="text" />} />
            <Route path="/todosreducer"  element={<TodosReducer/>}/>
            <Route
              path="/hoc2"
              element={
                <ModifiedTextComponent
                  text="<p>Hello how are u</p>"
                  Paragragh={BoldComponent
                  
                  }
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}
