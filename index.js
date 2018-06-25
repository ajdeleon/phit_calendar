const express = require('express')
const axios = require('axios')
const fs = require('fs')

const app = express()

let jsonData
const re =  /{"i18n":.*}/gi

const getData = async (callback) => {
  try {
    let data = await axios.get('https://phillyimprovtheater.com/shows/')
    data = data.data.replace(/&quot;/g, '\"')
    data = data.match(re)
    jsonData = {data: data}
    callback()

  } catch (error) {
    console.error(error)
  }
}

getData(() => console.log('Data pulled'))

app.get('/', (req, res) => res.send('Welcome to the improved calendar'))
app.get('/data', (req, res) => res.send(jsonData))


app.listen(4000, () => console.log("Listening on port 4000"))
