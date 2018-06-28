export const setMsg = val => ({
  type: 'SET_MSG',
  text: val
})

export const sendMsg = val => ({
  type: 'SEND_MSG',
  text: val,
})

export const setChatValue = messages => ({
  type: 'SET_CHAT_VALUE',
  messages: messages,
  source: 'slack'
})

export const setAuthor = author => ({
  type:'SET_AUTHOR',
  author:author,
})