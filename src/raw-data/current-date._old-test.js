import test from 'ava'
import { Generator, gen } from '../test-env/testcheck'
import { check } from '../test-env/ava-check'
import { messagesWithDateInfo } from './current-date.js'

const monthGen = gen.intWithin(0, 11)

const monthDayGen = gen.intWithin(1, 28)

const messagesGenerator = gen.shape({
  author: gen.string,
  msg: gen.string,
  date: gen.array([ monthGen, monthDayGen ]),
})

test('messagesWithDateInfo produces valid data about current year :: 1',
     check({ times: 200 },
           gen.array(messagesGenerator, { minSize: 2, maxSize: 10 }),
           (t, messages) => {
             messages = messages.map(
               msg => ({
                 ...msg,
                 date: new Date(2018, msg.date[0], msg.date[1])
               })
             )

             const messagesWithDates =
                   messagesWithDateInfo(messages, new Date(2018, 0, 1))

             messagesWithDates.forEach(
               msg => t.true(msg.isYearOK)
             )
           }))


test('messagesWithDateInfo produces valid data about current year :: 2',
     check({ times: 200 },
           gen.array(messagesGenerator, { minSize: 2, maxSize: 10 }),
           (t, messages) => {
             messages = messages.map(
               msg => ({
                 ...msg,
                 date: new Date(2018, msg.date[0], msg.date[1])
               })
             )

             const messagesWithDates =
                   messagesWithDateInfo(messages, new Date(2019, 0, 1))

             messagesWithDates.forEach(
               msg => t.false(msg.isYearOK)
             )
           }))


test('messagesWithDateInfo produces valid data about current year :: 3',
     check({ times: 200 },
           gen.array(messagesGenerator, { minSize: 2, maxSize: 10 }),
           (t, messages) => {
             messages = messages.map(
               msg => ({
                 ...msg,
                 date: new Date(2018, msg.date[0], msg.date[1])
               })
             )

             const messagesWithDates =
                   messagesWithDateInfo(messages, new Date(1990, 0, 1))

             messagesWithDates.forEach(
               msg => t.false(msg.isYearOK)
             )
           }))
