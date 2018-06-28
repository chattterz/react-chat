import {
  normalizeChatData
} from '../../data-processing/chat-messages.js'

const startState = {
  text: '',
  send: '',
  chatMsgs: []
}

const chat = (state = startState, action) => {
  switch (action.type) {
  case 'SET_MSG':
    return {
      ...state,
      text: action.text
    }
  case 'SET_AUTHOR':
    return {
      ...state,
      author: action.author
    }
  case 'SEND_MSG':
    return {
      ...state,
      send: action.text
    }
  case 'CLEAR_SEND_MSG':
    return {
      ...state,
      send: '',
      text: ''
    }
  case 'SET_CHAT':
    const value = JSON.parse(action.value)

    return {
      ...state,
      chatMsgs: normalizeChatData(value.messages)
    }
  default:
    return state
  }
}

export default chat
