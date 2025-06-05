import "./App.css";
import Nav from "./Nav";
import { useState } from "react";
import AuthContext from "./context/AuthContext";
import UserContext from "./context/UserContext";
import { ErrorBoundary } from "react-error-boundary";
import FallbackError from "./components/FallBackError";
function App() {
  const [token, setToken] = useState(false);
  const [user, setUser] = useState("");
  return (
    <ErrorBoundary FallbackComponent={FallbackError}>
    <AuthContext.Provider value={{ token, setToken }}>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <header className="App-header">
            <Nav setToken={setToken} token={token} />
          </header>
        </div>
      </UserContext.Provider>
    </AuthContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
