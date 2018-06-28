import { connect } from 'react-redux'
import test from 'ava'
import Adapter from 'enzyme-adapter-react-16'
import { Generator, gen } from '../../test-env/testcheck'
import { check } from '../../test-env/ava-check'
import chat from './chat.js'

const startState = {
  text: '',
  send: '',
  chatMsgs: []
}

const setMsgAction = {
  type: 'SET_MSG',
  text: 'hello'
}

test('chat reducer responds to actions', t => {
  t.deepEqual(chat(undefined, {}), startState)

  t.deepEqual(chat(undefined, setMsgAction),
              {...startState, text: 'hello'})
})
