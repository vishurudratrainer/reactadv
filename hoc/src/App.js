import "./App.css";
import InputComponent from "./InputComponent";
import LoginComponent from "./LoginComponent";
import ModifiedTextComponent from "./ModifiedTextComponent";
import NewFeatureComponent from "./NewFeatureComponent";
import PostComponent from "./PostComponent";
import PrivateComponent from "./PrivateComponent";
import TextComponent from "./TextComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginComponent/>
        {/**<ModifiedTextComponent text="I am the modified one" />**/}
        <TextComponent text="Hello from normal component"></TextComponent>
        <InputComponent />
        <NewFeatureComponent/>
        <PrivateComponent userRole="user" />
        <PostComponent />
      </header>
    </div>
  );
}

export default App;
