import React from 'react';
import './App.css';
import ChatWindow from './ChatWindow';
import Header from './Header';


const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <ChatWindow />
      </div>
    </div>
  );
}

export default App;
