import React from 'react'
import { ChatInput } from '../blocks/ChatInput.js'
import { ChatAuthorInput} from "../blocks/ChatAuthorInput";
import { connect } from 'react-redux'
import { MessagesView } from './MessagesView.js'
import { ScrollToBottom } from '../blocks/ScrollToBottom.js'

const ChatView = (props) => {
  const { store } = props

  const { setMsg, sendMsg, onAuthorChange } = props.store

  const value = store.chat.text
  const author = store.chat.author
  const messages = store.chat.chatMsgs || []

  const messagesView = <ScrollToBottom className="halko">
    { MessagesView({ messages }) }
  </ScrollToBottom>

  const chatInputView = <ChatInput value={value}
                                   sendMsg={sendMsg}
                                   setMsg={setMsg}
                                   author={author}/>



  return (
  <div>
    { messagesView }
    <div style={{height: 4 * 8}}></div>
    { chatInputView } <ChatAuthorInput onAuthorChange={onAuthorChange}/>
  </div>
  )
}

export default ChatView
