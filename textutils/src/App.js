import React, { useState } from 'react'
import './App.css';
import { Alert } from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

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
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Sucess", "Light Mode Enabled");
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutTitle="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyse" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
