import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import Todos from "./Todos";
import Fallback from "./Fallback";
const logError =(error,componentStack)=>{
  console.error("Error",error)
  console.log("compE",componentStack)
}
function App() {
  return (
     <ErrorBoundary  FallbackComponent={Fallback} onError={logError} >
      <div className="App">
        <Todos />
      </div>
    </ErrorBoundary>
  );
}

export default App;
