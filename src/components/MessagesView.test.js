import test from 'ava'
import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Generator, gen } from '../test-env/testcheck'
import { check } from '../test-env/ava-check'
import { MessagesView, MsgView } from './MessagesView.js'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'

configure({ adapter: new Adapter() })

const monthGen = gen.intWithin(0, 11)

const monthDayGen = gen.intWithin(1, 28)

const messagesGenerator = gen.shape({
  author: gen.string,
  msg: gen.string,
  date: [ monthGen, monthDayGen ],
})

test('MessagesView renders all given messages',
     check({ times: 200 },
           gen.array(messagesGenerator, { minSize: 2, maxSize: 10 }),
           (t, messages) => {
             messages = messages.map(
               msg => ({
                 ...msg,
                 time: new Date(2018, msg.date[0], msg.date[1])
               })
             )

             const MountedComponent =
                   shallow(<MessagesView messages={messages}/>)

             t.is(MountedComponent.find(List).length, 1)

             const msgs = MountedComponent.find(ListItem)

             t.is(msgs.length, messages.length)
           }))
