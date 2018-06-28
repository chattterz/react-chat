export const normalizeChatData = messages => messages.map(
  msg => ({
    ...msg,
    time: new Date(msg.time * 1000)
  })
)
