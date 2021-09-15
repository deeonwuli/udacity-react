import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [answered, setAnswered] = useState(0);
  const [correct, setCorrect] = useState(0);

  const value1 = Math.floor(Math.random() * 100);
  const value2 = Math.floor(Math.random() * 100);
  const value3 = Math.floor(Math.random() * 100);
  const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
  const numQuestions = answered;
  const numCorrect = correct;
  const corrAnswer = value1 + value2 + value3;

  const countAnswered = () => {
    setAnswered(answered + 1)
  }

  const countCorrect = () => {
    setCorrect(correct + 1)
  }
 
  const checkAnswer = () => {
    if (corrAnswer === proposedAnswer) {
      return true
      } else {
      return false
      }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
        <button 
          value={true} 
          onClick={() => {
            if (checkAnswer()) 
              countCorrect();
            countAnswered()
          }}>True</button>
        <button 
          value={false} 
          onClick={() => {
            if (!checkAnswer())
              countCorrect();
            countAnswered()
          }}>False</button>
        <p className="text">
          Your Score: {numCorrect}/{numQuestions}
        </p>
      </div>
    </div>
  )
}

export default App;
