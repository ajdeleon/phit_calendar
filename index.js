const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

let extracted = ''
const re =  /{"i18n":.*}/gi

const getData = async () => {
  try {
    let data = await axios.get('https://phillyimprovtheater.com/shows/')
    data = data.data.replace(/&quot;/g, '\"')
    data = data.match(re)
    data = JSON.stringify(data)
    data = data.split(',')
    data = JSON.parse(data)

    fs.writeFile('test.txt', data, (err) => {
    if (err) throw err
      console.log('File saved')
    })
  } catch (error) {
    console.error(error)
  }
}

getData()

// fs.readFile(__dirname + '/test.txt','utf8', (err, data) => {
//   if (err) {
//     throw err
//   }
//   console.log(JSON.parse(data))
// })

