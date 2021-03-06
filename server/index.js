const express = require('express')
const axios = require('axios')
const fs = require('fs')
const cors = require('cors')
const dateConverter = require('./dateConverter.js')
const CronJob = require('cron').CronJob

const app = express()

let data
let objData
let newData
const re = /eventId".*?"endTime".*?}/g

const getData = async callback => {
  try {
    data = await axios.get('https://phillyimprovtheater.com/shows/')
    data = data.data.replace(/&quot;/g, '"')
    data = data.replace(/&#039;/g, "'")
    data = data.replace(/&#8217;/g, "'")
    data = data.replace(/&l.....gt;/gi, '...')
    data = data.replace(/&#038;/g, '&')
    data = data.replace(/&#8220;/g, '-')
    data = data.replace(/&#8211;/g, '-')
    data = data.replace(/&#8221;/g, '-')
    // data = data.replace(
    //   /"i18n":{"find_out_more":"Find out more \\u00bb","for_date":"Events for"},/g,
    //   ''
    // )
    // data = data.match(re)
    // objData = data.map((x, i) => {
    //   x = JSON.parse(x)
    //   return x
    // })
    // newData = dateConverter(objData)
    // callback()
    // } catch (error) {
    // console.error(error)
    // }
    // ^^ for posterity
    data = data.match(re)
    data = data.map(x => {
      return `{"${x}`
    })
    objData = data.map(x => {
      x = JSON.parse(x)
      return x
    })
  } catch (err) {
    console.log(err)
  }
  callback()
}

getData(() => console.log('Initial data pulled'))
const job = new CronJob('0 */6 * * *', () => {
  const d = new Date()
  getData(() => console.log('Data pulled at: ', d))
})

job.start()

app.get('/', (req, res) => res.send('Welcome to the improved calendar'))
app.get('/data', (req, res) => res.send(objData))

app.listen(4000, () => console.log('Listening on port 4000'))
