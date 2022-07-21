import React from 'react'

const MessagePrompt = ({ message, setMessageExists }) => {
  return (
    <div className="prompt-container">
      <div className="outside"></div>
      <div className="prompt">
        <h4>MESSAGE</h4>
        <div className="message">
          {message}
        </div>
        <div className="buttons">
          <button className="crud-btn" onClick={() => setMessageExists(false)}>GO BACK</button>
        </div>
      </div>
    </div>
  )
}

export default MessagePrompt