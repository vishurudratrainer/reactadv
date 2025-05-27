import "./App.css";
import MouseTracker from "./MouseTracker";
import P2 from "./P2";
import P1 from "./P1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <P1></P1>
        <P2></P2>
        <MouseTracker
          render={(position) => (
            <p>
              Mouseposition is {position.x},{position.y}
            </p>
          )}
        />
      </header>
    </div>
  );
}

export default App;
