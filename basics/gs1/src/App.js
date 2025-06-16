import "./App.css";
import Calculator from "./Calculator";
import Counter from "./Counter";
import SelectColor from "./SelectColor";
import StudentForm from "./StudentForm";
import { useState } from "react";
function App() {
  const [showCalc, setShowCalc] = useState(true);
  const changeShowCalc = () => setShowCalc(!showCalc);
  return (
    <div className="App">
      <header className="App-header">
        <input type="checkbox" checked={showCalc} onClick={changeShowCalc} />
        Cal Visible
        <SelectColor />
        <StudentForm />
        {showCalc && <Calculator />}
        <Counter />
      </header>
    </div>
  );
}

export default App;
