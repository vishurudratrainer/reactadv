import { useState } from "react";
import ModifiedTable1 from "./ModifiedTable1";
import { useLocation } from "react-router-dom";
import NotLoggedIn from "./NotLoggedIn";
import { useContext } from "react";
import LoggedInContext from "./LoggedInContext";
import UserContext from "./UserContext";
export default function Todo1(props) {
   const userContext = useContext(UserContext)
  const [todos, setTodos] = useState({ data: [], headers: [] });
  const location = useLocation();
  const loggedInContext = useContext(LoggedInContext);
  const { loggedIn } = loggedInContext;
  const captureDataHeader = (data) => {
    let properties = [];
    if (data != null)
      for (let property in data) {
        properties.push(property);
      }
    return properties;
  };

  const fetchTodo = () =>
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((data) => data.json())
      .then((data) =>
        setTodos({
          data: data,
          headers: captureDataHeader(data.length === 0 ? null : data[0]),
        })
      );

  return (
    <div>
      <NotLoggedIn loggedIn={loggedIn}/>
      {loggedIn && (<div>
      <h1>User from Context {userContext.logUserName}</h1> 
      <h1>Welcome {location?.state?.username}</h1>
      <button onClick={fetchTodo}>Fetch Todos from Todo1</button>
      <ModifiedTable1 tableData={todos.data} properties={todos.headers} /></div>)}
    </div>
  );
}
