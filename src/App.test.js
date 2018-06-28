import test from 'ava'
import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App, { TestComponent, halko } from './App'
import { Generator, gen } from './test-env/testcheck'
import { check } from './test-env/ava-check'

test('runs 10 times', check({ times: 10 }, gen.posInt, (t, n) => {
  t.true(n >= 0)
}))

test('runs 20 times', check({ times: 20 }, gen.int, gen.int, (t, x, y) => {
  t.is(x + y, y + x)
}))

// configure({ adapter: new Adapter() })

// test('shallow', (t) => {
//   const wrapper = shallow(<TestComponent />)

//   t.is(wrapper.contains(<h3>{ halko }</h3>), true)
// })

