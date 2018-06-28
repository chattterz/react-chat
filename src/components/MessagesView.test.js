import test from 'ava'
import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { gen } from '../test-env/testcheck'
import { check } from '../test-env/ava-check'
import {AuthorInput} from '../blocks/AuthorInput';

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


             const MountedComponent =
                   mount(<AuthorInput value={'Radek'}/>)


               console.log(`${MountedComponent.prop('value')} === Radek`)

               t.is(MountedComponent.find('input').to.have.val(), 'Radek');

           }))
