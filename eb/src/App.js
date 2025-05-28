import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import Todos from "./Todos";
function App() {
  return (
    <ErrorBoundary
      fallback={<div>Some error occured.Please try after some time</div>}
    >
      <div className="App">
        <Todos />
      </div>
    </ErrorBoundary>
  );
}

export default App;
