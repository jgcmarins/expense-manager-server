'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  email: {
    type: String,
    required: [true, 'Email field is required']
  },
  status: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

var User = mongoose.model('user', UserSchema)

module.exports = User
