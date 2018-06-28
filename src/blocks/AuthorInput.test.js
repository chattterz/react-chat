import test from 'ava'
import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Generator, gen } from '../test-env/testcheck'
import { check } from '../test-env/ava-check'
import { AuthorInput } from './AuthorInput.js'
import sinon from 'sinon'

configure({ adapter: new Adapter() })

const sampleAuthor = 'abc'
const sampleSetAuth = null;
test('AuthorInput test ', (t) => {
    const wrapper = shallow(<AuthorInput value={sampleAuthor} setAuth={sampleSetAuth} />);
    console.log(wrapper.debug());

    t.is(wrapper.matchesElement(<input type="text" className="author-input" value={ sampleAuthor }/>), true);
})