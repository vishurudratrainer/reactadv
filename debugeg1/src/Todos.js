import { useState } from "react";
import ModifiedTable1 from "./ModifiedTable1";
import NotLoggedIn from "./NotLoggedIn";
import { useContext } from "react";
import LoggedInContext from "./LoggedInContext";
export default function Todo(props) {
  const [todos, setTodos] = useState([]);
  const loggedInContext = useContext(LoggedInContext);
  const { loggedIn } = loggedInContext;
  const fetchTodo = () =>
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((data) => data.json())
      .then((data) => setTodos(data));

  return (
    <div>
      <NotLoggedIn loggedIn={loggedIn} />
      {loggedIn && (
        <div>
          <button onClick={fetchTodo}>Fetch Todos</button>
          <ModifiedTable1
            tableData={todos}
            properties={["id", "userId", "title", "completed"]}
          />
        </div>
      )}
    </div>
  );
}
