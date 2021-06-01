import {React, useState, useEffect} from 'react';
import './App.css';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Home from './components/Home.js';

function App() {
  const [registerFlag, setRegisterFlag] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  function pageRender() {
    if (loggedIn)
      return (<Home />);
    else if (!registerFlag)
      return (<Login logInSetter={() => setLoggedIn} registerFlagSetter={() => setRegisterFlag} />);
    else
      return (<Register />);

  }

  return (
  
    <div class="home-page">
      {pageRender()}
    </div>
  );
    
}

export default App;
