'use strict'

var express = require('express')
var router = express.Router()
var User = require('../models/user')

router.get('/:id', (req, res, next) => {
  User.findOne({ _id: req.params.id })
  .then((user) => {
    res.send(user)
  })
  .catch(next)
})

router.post('/', (req, res, next) => {
  User.create(req.body)
  .then((expense) => {
    res.send(expense)
  })
  .catch(next)
})

router.put('/:id', (req, res, next) => {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body)
  .then(() => {
    User.findOne({ _id: req.params.id })
    .then((user) => {
      res.send(user)
    })
  })
  .catch(next)
})

router.delete('/:id', (req, res, next) => {
  User.findByIdAndRemove({ _id: req.params.id })
  .then((user) => {
    res.send(user)
  })
  .catch(next)
})

module.exports = router
