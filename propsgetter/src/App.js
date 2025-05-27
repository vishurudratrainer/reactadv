import "./App.css";
import Input from "./Input";
function getUserNameInputProps() {
  return {
    placeholder: "Enter ur username",
    type: "text",
  };
}

function getPasswordInputProps() {
  return {
    placeholder: "Enter ur password",
    type: "password",
  };
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Input getInputProps={getUserNameInputProps} />
        <br />
        <Input getInputProps={getPasswordInputProps} />
      </header>
    </div>
  );
}

export default App;
