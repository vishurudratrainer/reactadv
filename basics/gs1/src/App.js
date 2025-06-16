import "./App.css";
import Calculator from "./Calculator";
import Counter from "./Counter";
import Presentation from "./components/slideshow/Presentation";
import SelectColor from "./components/stylessheet/SelectColor";
import StudentForm from "./components/students/StudentForm";
import { useState } from "react";
import CounterClass from "./components/classbased/CounterClass";
function App() {
  const [showCalc, setShowCalc] = useState(true);
  const changeShowCalc = () => setShowCalc(!showCalc);
  return (
    <div className="App">
      <header className="App-header">
        <CounterClass/>
        <input type="checkbox" checked={showCalc} onClick={changeShowCalc} />
        Cal Visible
        {/**showCalc && (
          <div>
            <SelectColor />
            <StudentForm />
            <Calculator />
            <Counter />
          </div>
        )**/}
        <Presentation/>
      </header>
    </div>
  );
}

export default App;
