import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import Todos from "./Todos";
import Fallback from "./Fallback";
import Todos1 from "./Todos1";
const logError = (error, componentStack) => {
  console.error("Error", error);
  console.log("compE", componentStack);
};
function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={Fallback} onError={logError}>
        <Todos />
      </ErrorBoundary>{" "}
      <Todos1 />
    </div>
  );
}

export default App;
