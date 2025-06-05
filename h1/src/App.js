import "./App.css";
import Nav from "./Nav";
import { useState } from "react";
import AuthContext from "./AuthContext";
function App() {

  const [token,setToken]=useState(false)
  return (
    <AuthContext.Provider value={{token,setToken}}>
    <div className="App">
      <header className="App-header">
        <Nav setToken={setToken} token={token} />
      </header>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
