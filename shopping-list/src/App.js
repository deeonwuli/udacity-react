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
    setItems(oldState => ({
      items: [...oldState.items, items],
    }));
  };

  const deleteLastItem = () => {
    setItems(() => ({ items: items.slice(0, -1) }));
  };

  const inputIsEmpty = () => {
    return value === '';
  };

  const noItemsFound = () => {
    return items.length === 0;
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
          <button disabled={inputIsEmpty}>Add</button>
        </form>

        <button onClick={deleteLastItem} disabled={noItemsFound}>
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
