import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

//The code below is function based component
//The code in return ( ) is JSX
function App() {

  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title="TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  
  return (
    <>
{/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
  {/* <Routes>
    <Route exact path="/about" element={<About/>}></Route>
    <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} />}></Route>
  </Routes> */}
  <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
</div>
{/* </Router> */}
  </>
  );
}

export default App;