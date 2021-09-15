import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [text, setText] = useState('');
  
  const updateMirror = (e) => {
  	setText(e.target.value)
  }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text" placeholder="Say Something" value={text} onChange={updateMirror}  />
          <p className="echo">Echo: <span>{text}</span></p>
          <p>This should mirror the text you typed into the input field.</p>
        </div>
      </div>
    );
}

export default App;
