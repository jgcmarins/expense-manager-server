'use strict'

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect('mongodb://localhost/expense-manager')
mongoose.Promise = global.Promise

app.use(bodyParser.json())

app.use('/api', require('./routes/api'))

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message })
})

app.listen(process.env.port || 4000, () => {
  console.log('Server is running on port 4000.')
})
