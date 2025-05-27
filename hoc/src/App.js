import "./App.css";
import InputComponent from "./InputComponent";
import ModifiedTextComponent from "./ModifiedTextComponent";
import PostComponent from "./PostComponent";
import TextComponent from "./TextComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/**<ModifiedTextComponent text="I am the modified one" />
        <TextComponent text="Hello from normal component"></TextComponent>
        <InputComponent />**/}
        <PostComponent/>
      </header>
    </div>
  );
}

export default App;
