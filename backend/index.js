'use strict'

var express = require('express')
var http = require('http')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

const PORT = 4000

var app = express()

mongoose.connect('mongodb://localhost/expense-manager')
mongoose.Promise = global.Promise

app.use(bodyParser.json())

app.use('/api', require('./routes/api'))

app.use((err, req, res, next) => {
  res.status(422).send({ error: err._message })
})

app.use((req, res) => {
  res.status(404).send({ error: '404 - Not Found'})
})

http.createServer(app).listen(PORT, () => {
  console.log('Server is running on port ' + PORT + '.')
})
