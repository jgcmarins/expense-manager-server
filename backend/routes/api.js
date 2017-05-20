'use strict'

var express = require('express')
var router = express.Router()
var Expense = require('../models/expense')

router.get('/expenses', (req, res, next) => {
  res.send({ res: 'GET'})
})

router.post('/expenses', (req, res, next) => {
  res.send({ res: 'POST'})
})

router.put('/expenses/:id', (req, res, next) => {
  res.send({ res: 'PUT'})
})

router.delete('/expenses/:id', (req, res, next) => {
  res.send({ res: 'DELETE'})
})

module.exports = router
