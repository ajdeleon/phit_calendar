module.exports = function(data) {
  const dataCopy = [...data]

  const dateConverter = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  }

  const unchangedDatesArray = data.map(x => {
    return x.endTime.split(' ').slice(0, 2)
  })

  const convertedDates = unchangedDatesArray.map((x, i) => {
    return new Date(`2018-${dateConverter[x[0]]}-${x[1]}`)
  })

  const convertedData = dataCopy
    .map((x, i) => {
      return { ...x, endTimeConverted: convertedDates[i] }
    })
    .filter(show => Date.parse(show.endTimeConverted) >= Date.now() - 96400000)
  return convertedData
}
