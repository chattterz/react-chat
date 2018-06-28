import React from 'react'

export const AuthorInput = ({ value, setAuth }) => (
    <input type="text"
           value={value}
           className="author-input"
            onChange={event => setAuth(event.target.value)}
           
    />
)
