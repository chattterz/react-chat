import 'ramda'

const messages = [
  { author: 'Diana', msg: 'Hello guys, how you doooin?',
    date: new Date(2018, 6, 27, 10, 24), },

  { author: 'Jake', msg: `I'm doing great!`,
    date: new Date(2018, 6, 27, 10, 25, 21), },

  { author: 'Deborah', msg: 'Gimme, gimme, gimme, a maaaaaan...',
    date: new Date(2016, 3, 9, 12), },

  { author: 'Maria', msg: `Well, I'd like a cookie :(`,
    date: new Date(2018, 6, 27, 10, 29, 30), },

  { author: 'Maria', msg: 'Is anybody at work?',
    date: new Date(2014, 3, 12, 12, 24, 00), },

  { author: 'Jake', msg: `Got stuck in traffic!`,
    date: new Date(2014, 3, 12, 13, 35, 27), },

  { author: 'Maria', msg: 'Guuuys!',
    date: new Date(2014, 3, 12, 12, 24, 12), },

  { author: 'Jake', msg: `On my way!`,
    date: new Date(2014, 3, 12, 13, 35, 21), },

  { author: 'Justin', msg: 'Plsss, what was that tune Diana played last night?',
    date: new Date(2016, 3, 8, 22), },

]


const filteredMessages =
      messages.filter(
        (element) =>
          element.date.getTime() >= new Date(2015, 1, 1, 0).getTime() &&
          element.date.getTime() <= new Date().getTime()
      );
