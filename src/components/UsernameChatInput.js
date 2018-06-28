import React from 'react'

const UsernameChatInput = ({setAuthor, author}) => {
  return <div><input type="text"
                value={author}
                className="chat-input"
                onChange={event => setAuthor(event.target.value)}
  /></div>
}

export default UsernameChatInput;