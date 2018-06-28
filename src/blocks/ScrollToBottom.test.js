import test from 'ava'
import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Generator, gen } from '../test-env/testcheck'
import { check } from '../test-env/ava-check'
import { ScrollToBottom } from './ScrollToBottom.js'
import sinon from 'sinon'

configure({ adapter: new Adapter() })

test('ScrollToBottom gets ',
     (t) => {
       const spy = sinon.spy(ScrollToBottom.prototype, 'componentDidUpdate')

       const firstChildren = (
           <div>
           <div key={1}></div>
           </div>
       )

       const wrapper = mount(<ScrollToBottom>
                             { firstChildren }
                             </ScrollToBottom>)


       const newChildren = (
           <div>
           <div key={1}></div>
           <div key={2}></div>
           <div key={7}></div>
           </div>
       )

       wrapper.setProps({
         children: newChildren
       })

       t.true(spy.calledOnce)

       t.true(spy.calledWith(
         sinon.match.object,
         sinon.match(value => value === null),
         sinon.match(value => {
           return typeof value === 'object' &&
             typeof value.newChildren === 'boolean'
         })))
     })
