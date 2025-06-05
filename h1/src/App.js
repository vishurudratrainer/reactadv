import "./App.css";
import Nav from "./Nav";
import { useState } from "react";
function App() {

  const [token,setToken]=useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <Nav setToken={setToken} token={token} />
      </header>
    </div>
  );
}

export default App;
