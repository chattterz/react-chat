import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {
  createEpicMiddleware, combineEpics, selectArray, select
} from 'redux-most'
import { compose } from 'ramda'
import { map, fromPromise, of, from } from 'most'
import { toWebSocket } from './ws.js'
import rootReducer from './state-managment/reducers/index.js'
import { conn, socketStream } from './state-managment/sources/chat.js'
import { create } from '@most/create'
import { composeWithDevTools } from 'redux-devtools-extension'

import './layout/reset.css'
import './layout/fonts.css'
import './layout/inputs.css'

import './App.css'

import ChatView from './components/ChatView.js'
import ChatConnectionFactory from './connections/ChatConnection.js'

const receiveWsEpic = action$ => action$
  .thru(select('START_APP'))
  .chain(_ => socketStream)
  .map(value => ({
    type: 'SET_CHAT',
    value: value.data
  }))


const sendWsEpic = action$ => action$
  .thru(select('SEND_MSG'))
  .map(_ => ({
    type: 'CLEAR_SEND_MSG'
  }))


const delayedEpic = action$ => action$
  .thru(select('SEND_MSG'))
  .map(_ => ({
    type: 'DELAYED_ACTION'
  }))


const rootEpic = combineEpics([
  receiveWsEpic,
  sendWsEpic,
  delayedEpic
])

const epicMiddleware = createEpicMiddleware(rootEpic)

const ChatComponent = ChatConnectionFactory(ChatView)

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware))
)

const prepareMsg = obj => {
    return {
        author: obj.authorValue || 'Placeholder',
        msg: obj.msg
    }
}

const streamOfMsgToSend = create((add) => {
  store.subscribe(() => {
    const msg = store.getState().chat.send
    const authorValue = store.getState().chat.authorValue
    add({msg, authorValue})
  })

	return () => null
}).skipRepeats()
  .filter(msg => msg.msg.length > 0)
  .map(prepareMsg)
  .map(x => JSON.stringify(x))

toWebSocket(streamOfMsgToSend, conn)

const App = () => (
  <Provider store={store}>
    <div style={{marginLeft: 4 * 8, marginRight: 4 * 8}}>
      <header style={{marginBottom: 3 * 8}}>
        <h3>{ halko }</h3>
      </header>

      <ChatComponent />
    </div>
  </Provider>
)

export const halko = 'Oh how we chattin <3'

export const TestComponent = () => (
  <div style={{marginLeft: 4 * 8, marginRight: 4 * 8}}>
    <header style={{marginBottom: 3 * 8}}>
      <h3>{ halko }</h3>
      <span>Foo</span>
    </header>
  </div>
)

export const TestComponent2 = ({ headerText }) => (
  <section>
    <div style={{marginLeft: 4 * 8, marginRight: 4 * 8}}>
      <header>
        <h2>{ headerText }</h2>
        <h3>{ halko }</h3>
      </header>
    </div>
  </section>
)

store.dispatch({
  type: 'START_APP'
})

export default App
