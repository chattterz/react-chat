import React from 'react'

const UsernameChatInput = ({setAuthor, author}) => {
  return <input type="text"
                value={author}
                className="chat-input"
                onChange={event => setAuthor(event.target.value)}
  />
}

export default UsernameChatInput;