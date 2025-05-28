import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import Todos from "./Todos";
import Fallback from "./Fallback";
const logError =(error)=>{
  console.error("Error",error)
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
