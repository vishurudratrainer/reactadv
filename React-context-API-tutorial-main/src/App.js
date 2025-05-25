import Navbar from "./components/Navbar";
import Button from "./components/Button";
import { ThemeContext, themes } from "./contexts/ThemeContext";
import { useState } from "react";
import { UserContext, userData } from "./contexts/UserContext";

function App() {
  const [theme, setTheme] = useState(themes.light);
  const [user, setUser] = useState(userData);

  const toggleTheme = () => {
    setTheme((state) => (state === themes.light ? themes.dark : themes.light));
  };

  return (
    <div className="App">
      <h1>React Context API Tutorial</h1>

      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <UserContext.Provider value={user}>
          <Navbar />
        </UserContext.Provider>

        <Button>Toggle Theme</Button>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
