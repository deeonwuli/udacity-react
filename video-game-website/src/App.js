import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameForm from './NameForm';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <h1>Video Game Website</h1>
      <NameForm />
    </div>
  );
}

export default App;
