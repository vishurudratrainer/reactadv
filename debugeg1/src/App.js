import './App.css';
import Nav from './Nav';
import { useState } from 'react';
import LoggedInContext from './LoggedInContext';

function App() {
  const [loggedIn,setLoggedIn]=useState(false)
  return (
    <LoggedInContext.Provider value={{loggedIn:loggedIn,setLoggedIn:setLoggedIn}}>
    <div className="App">
      <header className="App-header">
       <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
       </header>
    </div>
    </LoggedInContext.Provider>
  );
}

export default App;
