import "./App.css";
import Counter from "./Counter";
import Image from "./Image";
import Paragraph from "./Paragraph";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Image />
        <Paragraph />
      </header>
    </div>
  );
}

export default App;
