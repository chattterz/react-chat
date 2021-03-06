import React from 'react'
import { ChatInput } from '../blocks/ChatInput.js'
import { connect } from 'react-redux'
import { MessagesView } from './MessagesView.js'
import { ScrollToBottom } from '../blocks/ScrollToBottom.js'

const ChatView = (store) => {
  const { setMsg, sendMsg } = store

  const value = store.chat.text
  const messages = store.chat.chatMsgs || []

  const messagesView = <ScrollToBottom className="halko">
    { MessagesView({ messages }) }
  </ScrollToBottom>

  const chatInputView = <ChatInput value={value}
                                   sendMsg={sendMsg}
                                   setMsg={setMsg} />


  return (
  <div>
    { messagesView }
    <div style={{height: 4 * 8}}></div>
    { chatInputView }
  </div>
  )
}

export default ChatView
