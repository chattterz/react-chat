import React from 'react'
import { connect } from 'react-redux'
import { sendMsg, setMsg, setAuth } from '../state-managment/actions.js'
import { bindActionCreators } from 'redux'
import { fromWebSocket, toWebSocket } from 'most-w3msg'
import { from } from 'most'
import { conn, stream } from '../state-managment/sources/chat.js'

const ChatConnection = View => store => (
  <View store={store} />
)

const ChatConnectionFactory = view =>
  connect(({ chat }) => ({ chat }),
          (dispatch) => bindActionCreators({ sendMsg, setMsg, setAuth }, dispatch))
(ChatConnection(view))

export default ChatConnectionFactory
