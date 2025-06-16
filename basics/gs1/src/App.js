import "./App.css";
import Calculator from "./Calculator";
import Counter from "./Counter";
import SelectColor from "./SelectColor";
import StudentForm from "./StudentForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SelectColor/>
        <StudentForm/>
        <Calculator/>
        <Counter />
      </header>
    </div>
  );
}

export default App;
