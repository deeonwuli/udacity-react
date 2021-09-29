import React, { useState } from "react";

export default function ChatWindow() {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  const users = [
    { username: "Amy" }, 
    { username: "John" }
  ];

  const handleInput = (event) => {
    setText(event.target.value);
  }

  const submitMessage = (event) => {
    event.preventDefault();
    const newChat = [...messages, text];
    setMessages(newChat);
  }
  return (
    <>
      {users.map((user, index) => (
        <div className="chat-window">
          <h2>Super Awesome Chat</h2>
          <div key={index}>
            <div className="name sender">{user.username}</div>
            <ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={message.username === user.username
                    ? "message sender"
                    : "message recipient"}
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>
            <div>
              <form className="input-group" onSubmit={submitMessage}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your message..."
                  value={text}
                  onChange={handleInput}
                />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={!text}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
