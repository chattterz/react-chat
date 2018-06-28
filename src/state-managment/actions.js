export const setMsg = val => ({
  type: 'SET_MSG',
  text: val
})

export const sendMsg = (val, author) => ({
  type: 'SEND_MSG',
  text: val,
  author: author
});

export const setChatValue = messages => ({
  type: 'SET_CHAT_VALUE',
  messages: messages,
  source: 'slack'
})


export const onAuthorChange = val => ({
    type: 'SET_AUTHOR',
    text: val
})
