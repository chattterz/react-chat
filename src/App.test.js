import test from 'ava'
import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App, { TestComponent, TestComponent2, halko } from './App'
import { Generator, gen } from './test-env/testcheck'
import { check } from './test-env/ava-check'

configure({ adapter: new Adapter() })

test('Contains proper header', (t) => {
  const wrapper = shallow(<TestComponent />)

  t.is(wrapper.contains(<h3>{ halko }</h3>), true)
})

const sampleHeaderText = 'Hello <3'

test('Component2 also contains proper header', (t) => {
  const wrapper = shallow(<TestComponent2
                          headerText={sampleHeaderText} />)

  t.is(wrapper.contains(<h2>{ sampleHeaderText }</h2>), true)
})

const author = 'dupa';
test('Test lube', (t) => {

})