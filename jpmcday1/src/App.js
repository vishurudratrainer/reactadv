import "./App.css";
import Nav from "./components/Nav";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("black");
  const [location, setLocation] = useState("IN");
  const captureColor = (e) => setColor(e.target.value);
  return (
    <div className="App">
      <header className="App-header">
        <label>
          Enter color <input id="color1" onChange={captureColor} />
        </label>
        <br />
        <label>
          Enter color <input id="color2" onChange={captureColor} />
        </label>
        <br />
        <Nav color={color} />
      </header>
    </div>
  );
}

export default App;
