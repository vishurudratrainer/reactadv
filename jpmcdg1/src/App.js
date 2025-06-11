import { useState } from "react";
import GridThemeContext from "./GridThemeContext";
import "./App.css";
import Nav from "./Nav";
import {
  themeMaterial,
  themeQuartz,
  themeAlpine,
  themeBalham,
} from "ag-grid-community";

function App() {
  const [gridTheme, setGridTheme] = useState(themeMaterial);
  const captureChange = (e) => {
    let value = e.target.value;
    if (value === "themeMaterial") {
      setGridTheme(themeMaterial);
    }
    if (value === "themeQuartz") {
      setGridTheme(themeQuartz);
    }
    if (value === "themeAlpine") {
      setGridTheme(themeAlpine);
    }
    if (value === "themeBalham") {
      setGridTheme(themeBalham);
    }
  };
  return (
    <div className="App">
      <GridThemeContext.Provider value={{gridTheme:gridTheme}}>
      <label>
        Select theme{" "}
        <select onChange={captureChange}>
          <option value={"themeMaterial"}>themeMaterial</option>
          <option value={"themeQuartz"}>themeQuartz</option>
          <option value={"themeAlpine"}>themeAlpine</option>
          <option value={"themeBalham"}>themeBalham</option>
        </select>
      </label>
      <Nav />
      </GridThemeContext.Provider>
    </div>
  );
}

export default App;
