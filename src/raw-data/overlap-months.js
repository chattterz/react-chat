const two = [
  {
    from: "01-2015",
    to: "02-2016"
  },
  {
    from: "05-2015",
    to: "05-2016"
  },
  {
    from: "12-2015",
    to: "01-2016"
  },
  {
    from: "08-2016",
    to: "07-2017"
  },
  {
    from: "06-2016",
    to: "07-2017"
  }
]

const one = [
  {
    from: "01-2015",
    to: "01-2016"
  },
  {
    from: "06-2015",
    to: "06-2017"
  },
  {
    from: "01-2017",
    to: "01-2018"
  },
]

const mYfromString = x => {
  const [ mm, YYYY ] = x.split('-')
  const year = Number(YYYY)
  const month = Number(mm)

  return (year * 12) + month
}

const transformToMonthsValues = arr => {
  return arr.map(({ from, to }) => ({
    from: mYfromString(from),
    to: mYfromString(to),
  }))
}

const sumRange = d => (d.to - d.from)

const overlapsCheck = (a, b) => {
  // ranges don't overlap!
  if (b.from > a.to) {
    return {
      overlaps: false,
      merged: {}
    }
  }

  // ranges overlap
  return {
    overlaps: true,
    merged: {
      from: a.from,
      to: Math.max(a.to, b.to)
    }
  }
}

const mergeOverlaps = (merged, arr) => {

  debugger 

  if (arr.length === 0) {
    return merged
  }

  const [hd, tail] = arr

  const val = arr.reduce((acc, el) => {
    const { left, sum } = acc
    const { overlaps, merged } = overlapsCheck(sum, el)

    if (overlaps) {
      return {
        left,
        sum: merged
      }
    }

    return {
      sum,
      left: left.concat(el)
    }
  }, { left: [], sum: hd })

  return mergeOverlaps(merged.concat([val.sum]), val.left)
}

const calcMonths = arr => {
  const sorted = transformToMonthsValues(arr).sort((a,b) => a.from - b.from)

  return mergeOverlaps([], sorted).map(sumRange).reduce((a,b) => a+b)
}
