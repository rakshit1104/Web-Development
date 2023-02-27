import React, { useState } from 'react'
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode == 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#2b3035";
      showAlert("Sucess", "Dark Mode Enabled");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing!';
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Sucess", "Light Mode Enabled");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutTitle="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyse" mode={mode} showAlert={showAlert} />
      </div>
      <About />
    </>
  );
}

export default App;
