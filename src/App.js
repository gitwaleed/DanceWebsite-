import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";

// let name = "Waleed";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode has been enabled', 'success');
      document.title = ('Textutils - DarkMode');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = ('Textutils - LightMode');
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title='textUtils' about='About' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Switch>
          <Route exact path="/about">
            <About  />
          </Route>
          <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading='Enter the text below' mode={mode} />
            {/* </Route>
            </Switch>
      </Router> */}
    </>
  );
}
        export default App;
