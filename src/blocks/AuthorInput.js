import React from 'react'

const handleEnter = action => event => {
  if (event.key === 'Enter') {
    action(event.target.value)
  }
}

const submitMsg = action => event => {
  event.preventDefault()
  action()
}

export const AuthorInput = ({ value, setAuth }) => (
    <input type="text"
           value={value}
           className="author-input"
            onChange={event => setAuth(event.target.value)}
           
    />
)
