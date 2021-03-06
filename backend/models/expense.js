'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ExpenseSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  value: {
    type: Number,
    required: [true, 'Value field is required']
  },
  status: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Owner field is required']
  }
})

var Expense = mongoose.model('expense', ExpenseSchema)

module.exports = Expense
