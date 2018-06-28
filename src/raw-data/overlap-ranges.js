import 'ramda'

const employeOne = {
  name: 'Diana',
  workHistory: [
    {
      from: '01-2015',
      to: '02-2016'
    },
    {
      from: '05-2015',
      to: '05-2016'
    },
    {
      from: '12-2015',
      to: '01-2016'
    },
    {
      from: '08-2016',
      to: '07-2017'
    },
    {
      from: '06-2016',
      to: '07-2017'
    }
  ]
}

const employeTwo = {
  name: 'Justin',
  workHistory: [
    {
      from: '01-2015',
      to: '01-2016'
    },
    {
      from: '06-2015',
      to: '06-2017'
    },
    {
      from: '01-2017',
      to: '01-2018'
    },
  ]
}


const rangesToDates = history => history.map(
  ({ from, to }) => ({ from: stringToDate(from), to: stringToDate(to) })
)

const stringToDate = date => {
  const [ month, year ] = date.split('-')

  return new Date(Number(year), Number(month) - 1)
}

const withDates = rangesToDates(employeTwo.workHistory)

withDates.sort((a, b) => a.from.getTime() > b.from.getTime())

const employees = [ employeOne, employeTwo ]
