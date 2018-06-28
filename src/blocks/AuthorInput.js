import React from 'react'

export const AuthorInput = ({ value, setAuthor }) => (
    <input type="text"
           value={value}
           className="chat-input"
           onChange={event => setAuthor(event.target.value)}
    />
);