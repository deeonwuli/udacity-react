import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [value, setValue] = useState('')
  const [items, setItems] = useState([])

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addItem = (event) => {
    event.preventDefault();
    const newItems = [...items, value]
    setItems(newItems)
    setValue('')
  };

  const deleteLastItem = () => {
    const news = items.slice(0, -1)
    setItems(news)
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>

      <h2>Shopping List</h2>

      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={value}
          onChange={handleChange}
        />
        <button disabled={!value}>Add</button>
      </form>

      <button onClick={deleteLastItem} disabled={!items.length}>
        Delete Last Item
      </button>

      <p className="items">Items</p>
      <ol className="item-list">
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ol>
    </div>
  );
  }

export default App;
