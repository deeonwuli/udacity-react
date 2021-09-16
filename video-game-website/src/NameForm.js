import React, { useState } from "react"

export default function NameForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userName, setUserName] = useState('')
  const [items, setItems] = useState([])
  const [games, setGames] = useState(true)

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const toggleGamesPlayed = () => {
    setGames(!games)
  }

  const addName = (event) => {
    event.preventDefault();
    if (items.includes(userName)) {
      alert('Error! Enter a unique username.')
    } else {
      const newItems = [...items, userName]
      setItems(newItems)
      setFirstName('')
      setLastName('')
      setUserName('')
    }
  };

  return (
    <>
      <form onSubmit={addName}>
        <div>
          <label>First Name:
            <input
              placeholder="Enter your first name"
              onChange={handleFirstNameChange} 
            />
          </label>
          <label>Last Name:
            <input
              placeholder="Enter your last name" 
              onChange={handleLastNameChange}  
            />
          </label>
          <label>Username:
            <input
              placeholder="Enter your username" 
              onChange={handleUserNameChange}  
            />
          </label>
        </div>
        <button disabled={!firstName || !lastName || !userName}>Add</button>
      </form>

      <ol className="item-list">
        {items.map((item, index) => (
          <li key={index}>
            {item} played {games ? '0' : '*/'} games.
          </li>
        ))}
        <button onClick={toggleGamesPlayed} className="smallButton">{games ? 'Hide' : 'Show'} the Number of Games Played</button>
      </ol>
    </>
  )
}