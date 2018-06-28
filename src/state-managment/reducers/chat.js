import {
  normalizeChatData
} from '../../data-processing/chat-messages.js'

const startState = {
  text: '',
  send: '',
  author: '',
  chatMsgs: []
}

const chat = (state = startState, action) => {
  switch (action.type) {
  case 'SET_MSG':
    return {
      ...state,
      text: action.text
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
    case 'SET_AUTHOR': {
      return {
          ...state,
          authorValue: action.authorValue,
      };
    }
  default:
    return state
  }
}

export default chat
