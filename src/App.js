
import './App.css';
import Navbar from './componant/Navbar';
import TextForms from './componant/TextForms';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
      <div className="container my-3">
        <TextForms heading="Enter Text Here" mode={mode}/>
      </div>
    </>
  );

}

export default App;
