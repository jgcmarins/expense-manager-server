'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ExpenseSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required.']
  },
  value: {
    type: Number,
    required: [true, 'Value field is required.']
  },
  status: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Expense = mongoose.model('expense', ExpenseSchema)

module.exports = Expense
