import React from 'react'

const MessagePrompt = ({ message, setMessageExists, setMessage }) => {
  return (
    <div className="prompt-container">
      <div className="outside"></div>
      <div className="prompt">
        <h4>MESSAGE</h4>
        <br />
        <div className="message">
          {message}
        </div>
        <br />
        <div className="buttons">
          <button 
            className="crud-btn" 
            onClick={() => setMessageExists(false)}
            onMouseUp={() => setMessage()}>GO BACK</button>
        </div>
      </div>
    </div>
  )
}

export default MessagePrompt