import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import Todos from "./Todos";
import Fallback from "./Fallback";
import Todos1 from "./Todos1";
const logError =(error,componentStack)=>{
  console.error("Error",error)
  console.log("compE",componentStack)
}
function App() {
  return (
     <ErrorBoundary  FallbackComponent={Fallback} onError={logError} >
      <div className="App">
        <Todos />
        <Todos1/>
      </div>
    </ErrorBoundary>
  );
}

export default App;
