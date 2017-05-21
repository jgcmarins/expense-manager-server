'use strict'

var express = require('express')
var router = express.Router()
var Expense = require('../models/expense')

router.get('/:id', (req, res, next) => {
  Expense.find({ owner: req.params.id })
  .then((expenses) => {
    res.send(expenses)
  })
  .catch(next)
})

router.post('/', (req, res, next) => {
  Expense.create(req.body)
  .then((expense) => {
    res.send(expense)
  })
  .catch(next)
})

router.put('/:id', (req, res, next) => {
  Expense.findByIdAndUpdate({ _id: req.params.id }, req.body)
  .then(() => {
    Expense.findOne({ _id: req.params.id })
    .then((expense) => {
      res.send(expense)
    })
  })
  .catch(next)
})

router.delete('/:id', (req, res, next) => {
  Expense.findByIdAndRemove({ _id: req.params.id })
  .then((expense) => {
    res.send(expense)
  })
  .catch(next)
})

module.exports = router
