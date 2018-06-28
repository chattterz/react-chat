import React from 'react'
import './ChatInput.css'



export const ChatAuthorInput = ({ onAuthorChange}) => (
        <input type="text"
               onChange={(event => onAuthorChange(event.target.value))}
        />
)
