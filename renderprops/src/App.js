import "./App.css";
import MouseTracker from "./MouseTracker";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
