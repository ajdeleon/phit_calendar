const express = require('express')
const axios = require('axios')
const fs = require('fs')
const cors = require('cors')

const app = express()

let data
let objData
const re = /{"eventId":.*}/gi

const getData = async callback => {
  try {
    data = await axios.get('https://phillyimprovtheater.com/shows/')
    data = data.data.replace(/&quot;/g, '"')
    data = data.replace(
      /"i18n":{"find_out_more":"Find out more \\u00bb","for_date":"Events for"},/g,
      ''
    )
    data = data.match(re)
    objData = data.map((x, i) => {
      x = JSON.parse(x)
      return x
    })
    callback()
  } catch (error) {
    console.error(error)
  }
}

if (!objData) {
  getData(() => console.log('Data pulled'))
}

app.get('/', (req, res) => res.send('Welcome to the improved calendar'))
app.get('/data', (req, res) => res.send(objData))

app.listen(4000, () => console.log('Listening on port 4000'))
