import "./App.css";
import Nav from "./Nav";
import { useState } from "react";
import LoggedInContext from "./LoggedInContext";
import UserContext from "./UserContext";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [logUserName, setLogUserName] = useState("");
  return (
    <LoggedInContext.Provider
      value={{ loggedIn: loggedIn, setLoggedIn: setLoggedIn }}
    >
      <UserContext.Provider
        value={{ logUserName: logUserName, setLogUserName: setLogUserName }}
      >
        <div className="App">
          <header className="App-header">
            <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          </header>
        </div>
      </UserContext.Provider>
    </LoggedInContext.Provider>
  );
}

export default App;
