import { Routes, Route, Link } from "react-router-dom";
import PostCreate from "./PostCreate";
import TodosAxios from "./TodosAxios";
import TodosFetch from "./TodosFetch";
import TodosRestInstance from "./TodosRestInstance";
import Transfer from "./Transfer";
import Login from "./Login";
import { useState } from "react";
import GuardComponent from "./GuardComponent";
import UserContext from "../context/UserContext";
import ThemeContext from"../context/ThemeContext";
import LocationContext from "../context/LocationContext";
const Nav = ({color}) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <ThemeContext.Provider value={{color:color, isVisible:true}}>
    <UserContext.Provider value={{ username: username }}>
      <div>
        {authenticated && (
          <div>
            <Link to={"/"} id="homePageLink">Home Page</Link>
            <br />
            <Link to={"/todosaxios"}id="todosaxioslink">Todos Axios</Link>
            <br />
            <Link to={"/todosfetch"} id="todosfetchlink">Todos Fetch</Link>
            <br />
            <Link to={"/todosret"}>Todos Rest</Link>
            <br />
            <Link to={"/transfer"} id="transfer">Transfer</Link>
            <br />
          </div>
        )}
        <Routes>
          <Route
            path="/"
            element={
              <Login
                setAuthenticated={setAuthenticated}
                setUsername={setUsername}
                username={username}
              />
            }
          />
          <Route
            element={
              <GuardComponent authenticated={authenticated}></GuardComponent>
            }
          >
            <Route
              path="/todosaxios"
              element={<TodosAxios authenticated={authenticated} />}
            />
            <Route
              path="/todosfetch"
              element={<TodosFetch authenticated={authenticated} />}
            />
            <Route
              path="/todosret"
              element={<TodosRestInstance authenticated={authenticated} />}
            />
            <Route
              path="/transfer"
              element={<Transfer authenticated={authenticated} />}
            />
            <Route
              path="/postcreate"
              element={<PostCreate authenticated={authenticated} />}
            />
          </Route>
        </Routes>
      </div>
    </UserContext.Provider>
    </ThemeContext.Provider>
  );
};
export default Nav;
