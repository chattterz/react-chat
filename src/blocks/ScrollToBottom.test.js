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

test('ScrollToBottom calls componentDidMount',
     (t) => {
       sinon.spy(ScrollToBottom.prototype, 'componentDidMount')

       const wrapper = mount(<ScrollToBottom><div></div></ScrollToBottom>);

       t.true(ScrollToBottom.prototype.componentDidMount.calledOnce)
     })

test('ScrollToBottom calls getSnapshotBeforeUpdate on new props',
     (t) => {
       const spy = sinon.spy(ScrollToBottom.prototype, 'getSnapshotBeforeUpdate')

       const wrapper = mount(<ScrollToBottom><div></div></ScrollToBottom>);

       t.false(spy.calledOnce)

       wrapper.setProps({
         children: (<div>new children!</div>)
       })

       t.true(spy.calledOnce)
     })
