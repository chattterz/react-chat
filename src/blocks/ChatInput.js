import React from 'react'
import './ChatInput.css'
import UsernameChatInput from '../components/UsernameChatInput'

const handleEnter = action => event => {
  if (event.key === 'Enter') {
    action(event.target.value)
  }
}

const submitMsg = action => event => {
  event.preventDefault()
  action()
}

export const ChatInput = ({ value, sendMsg, setMsg, setAuthor, author }) => (
  <form onSubmit={submitMsg(_ => sendMsg(value))}
        className="submit-form">
    <input type="text"
           value={value}
           className="chat-input"
           onChange={event => setMsg(event.target.value)}
    />
    <UsernameChatInput setAuthor={setAuthor} author={author}/>
    <input type="submit" value="Submit" className="submit-button" />
  </form>
)
