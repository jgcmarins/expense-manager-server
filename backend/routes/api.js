'use strict'

var express = require('express')

var app = express()

app.use('/expenses', require('./expenses'))

app.use('/user', require('./user'))

module.exports = app
